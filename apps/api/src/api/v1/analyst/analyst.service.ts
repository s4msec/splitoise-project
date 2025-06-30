import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { lastValueFrom } from "rxjs";
import { PrismaService } from "@/common/prisma/prisma.service";
import { CalculatorService } from "../calculator/calculator.service";

@Injectable()
export class AnalystService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly calculatorService: CalculatorService,
        private readonly httpService: HttpService
    ) {}

    async analyzeSplits(): Promise<true> {
        const utmParameter = process.env.GOOGLE_UTM_PARAMETER ?? "utm_campaign";
        const baseUrl = process.env.INTENDED_SERVICE_API;

        const links = await this.prismaService.splitoise.link.findMany({
            where: { prob: { gt: 0 } },
            orderBy: [{ splitId: 'asc' }],
            include: {
                split: { select: { id: true, splitterId: true } },
            },
        });

        const utmValues = links
            .map(link => {
                try {
                    const urlObj = new URL(link.url);
                    return urlObj.searchParams.get(utmParameter);
                } catch {
                    return null;
                }
            })
            .filter((v): v is string => !!v);

        const response = await lastValueFrom(
            this.httpService.post(
                `${baseUrl}/api/v1/admanager/extract-ecpm`,
                { keyValues: utmValues, utmParameter },
                { headers: { 'Content-Type': 'application/json' } }
            )
        );
        const results = response.data as Array<{ keyValue: string; adExchangeAverageECPM: number; hour: string }>;

        const resultMap: Record<string, number> = {};
        const hourMap: Record<string, string> = {};
        results.forEach(r => {
            const [, value] = r.keyValue.split('=');
            resultMap[value] = r.adExchangeAverageECPM;
            hourMap[value] = r.hour;
        });

        const linksWithECPM = links.map(link => {
            let ecpm = 0;
            let hour = '';
            try {
                const urlObj = new URL(link.url);
                const utmValue = urlObj.searchParams.get(utmParameter) ?? '';
                ecpm = resultMap[utmValue] ?? 0;
                hour = hourMap[utmValue] ?? '';
            } catch {
                ecpm = 0;
            }
            return { ...link, ecpm, hour };
        });

        const grouped: Record<number, Record<number, typeof linksWithECPM>> = {};
        for (const link of linksWithECPM) {
            const sid = link.split.splitterId;
            const splitId = link.splitId;
            grouped[sid] ??= {};
            grouped[sid][splitId] ??= [];
            grouped[sid][splitId].push(link);
        }

        const result: { data: { id: number; ecpm: number; prob: number; hidden: boolean }[]; isFirst: boolean; }[] = [];
        for (const splits of Object.values(grouped)) {
            const entries = Object.entries(splits).sort((a, b) => Number(a[0]) - Number(b[0]));
            entries.forEach(([_, arr], idx) => {
                result.push({
                    data: arr.map(link => ({ id: link.id, ecpm: link.ecpm, prob: link.prob, hidden: link.hidden })),
                    isFirst: idx === 0
                });
            });
        }

        const runRedistribute = await this.calculatorService.analyzeEcpmWithRedistribution(result);
        const updates = runRedistribute.flatMap(r => r.data);
        if (!updates.length) return true;

        const probCases = updates.map(({ id, prob }) => `WHEN ${id} THEN ${prob}`).join(' ');
        const ecpmCases = updates.map(({ id, ecpm }) => `WHEN ${id} THEN ${ecpm}`).join(' ');
        const ids = updates.map(({ id }) => id).join(', ');

        console.log(linksWithECPM)

        // const rawQuery = `
        //     UPDATE "Link"
        //     SET
        //         prob = CASE id ${probCases} END,
        //         ecpm = CASE id ${ecpmCases} END
        //     WHERE id IN (${ids});
        // `;

        // await this.prismaService.splitoise.$executeRawUnsafe(rawQuery);
        return true;
    }
}
