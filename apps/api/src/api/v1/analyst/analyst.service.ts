import { Injectable } from "@nestjs/common";
import { PrismaService } from "@/common/prisma/prisma.service";
import { CalculatorService } from "../calculator/calculator.service";
import { LinkData } from "@/utils/interfaces/calculator";

@Injectable()
export class AnalystService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly calculatorService: CalculatorService
  ) { }

  async analyzeSplits(): Promise<void> {
    const utmParameter = process.env.GOOGLE_UTM_PARAMETER ?? "utm_campaign";

    const links = await this.prismaService.splitoise.link.findMany({
      where: { prob: { gt: 0 } },
      orderBy: [{ splitId: 'asc' }],
      include: {
        Split: {
          select: {
            id: true,
            splitterId: true,
          },
        },
      },
    });

    const linksWithECPM = await Promise.all(
      links.map(async (link) => {
        try {
          const urlObj = new URL(link.url);
          const utmValue = urlObj.searchParams.get(utmParameter);

          if (utmValue) {
            const reportResult = await this.prismaService.intended.admanagerReportResults.findFirst({
              where: { keyValue: `${utmParameter}=${utmValue}` },
              orderBy: { createTime: 'desc' }
            });

            if (reportResult) {
              return {
                ...link,
                ecpm: reportResult.adExchangeAverageECPM ?? 0,
              };
            }
          }
        } catch (error) {
          console.error(`Erro ao processar link id=${link.id}:`, error);
        }

        // Valor padrão de ecpm se falhar ou não encontrar
        return { ...link, ecpm: 0 };
      })
    );

    // Agrupamento por splitterId → splitId
    const groupedBySplitter: Record<number, Record<number, typeof linksWithECPM>> = {};

    for (const link of linksWithECPM) {
      const splitterId = link.Split.splitterId;
      const splitId = link.splitId;

      if (!groupedBySplitter[splitterId]) {
        groupedBySplitter[splitterId] = {};
      }

      if (!groupedBySplitter[splitterId][splitId]) {
        groupedBySplitter[splitterId][splitId] = [];
      }

      groupedBySplitter[splitterId][splitId].push(link);
    }

    // Resultado no formato { data: [...], isFirst: boolean }
    const result: {
      data: { id: number; ecpm: number; prob: number; hidden: boolean }[];
      isFirst: boolean;
    }[] = [];

    for (const splits of Object.values(groupedBySplitter)) {
      const splitEntries = Object.entries(splits).sort(
        ([a], [b]) => Number(a) - Number(b)
      );

      splitEntries.forEach(([splitIdStr, links], index) => {
        const data = links.map(link => ({
          id: link.id,
          ecpm: link.ecpm,
          prob: link.prob,
          hidden: link.hidden,
        }));

        result.push({
          data,
          isFirst: index === 0,
        });
      });
    }

    const runRedistribute = await this.calculatorService.analyzeEcpmWithRedistribution(result);
    const updates = runRedistribute.flatMap(r => r.data);

    // Se não houver atualizações, sai cedo
    if (updates.length === 0) return;

    // Constrói os blocos do CASE de forma segura
    const probCases = updates
      .map(({ id, prob }) => `WHEN ${Number(id)} THEN ${Number(prob)}`)
      .join(' ');

    const ecpmCases = updates
      .map(({ id, ecpm }) => `WHEN ${Number(id)} THEN ${Number(ecpm)}`)
      .join(' ');

    const ids = updates.map(({ id }) => Number(id)).join(', ');

    // Query final
    const rawQuery = `
      UPDATE "Link"
      SET
        prob = CASE id ${probCases} END,
        ecpm = CASE id ${ecpmCases} END
      WHERE id IN (${ids});
    `;

    // Executa a query
    await this.prismaService.splitoise.$executeRawUnsafe(rawQuery);

  }
}
