import { Injectable } from "@nestjs/common";
import { LinkData } from "@/utils/interfaces/calculator";
import { PrismaService } from "@/common/prisma/prisma.service";

@Injectable()
export class CalculatorService {
  constructor(private readonly prismaService: PrismaService) { }

  async averageEcpm(data: LinkData[]): Promise<number> {
    let sumWeightedEcpm = 0;
    let sumWeight = 0;

    for (const { ecpm, prob, hidden } of data) {
      if (hidden) continue; // ignora itens ocultos
      if (prob == null || prob === 0) continue; // exclui itens com probabilidade 0

      const weight = prob / 100; // assume que prob vem em percentual (ex: 25 para 25%)
      sumWeightedEcpm += (ecpm ?? 0) * weight;
      sumWeight += weight;
    }

    const weightedAverage = sumWeight > 0 ? sumWeightedEcpm / sumWeight : 0;
    return Number(weightedAverage.toFixed(2));
  }


  async redistributeProbabilities(
    data: LinkData[],
    isFirst: boolean
  ): Promise<LinkData[]> {
    const withIdx = data.map((item, i) => ({ ...item, idx: i }));
    const fixed = withIdx.filter(({ ecpm }) => ecpm == null || ecpm <= 0);
    const valid = withIdx.filter(({ ecpm }) => ecpm != null && ecpm > 0);
    const sumFixed = fixed.reduce((sum, { prob }) => sum + prob, 0);

    if (valid.length === 0) {
      return data.map(item => ({
        ...item,
        prob: (item.ecpm == null || item.ecpm <= 0) ? item.prob : 0
      }));
    }

    // Peso condicional: ecpm^3 se isFirst, ecpm^2 se não
    const exponent = isFirst ? 3 : 2;

    const totalEcpmPower = valid.reduce(
      (sum, { ecpm }) => sum + Math.pow(ecpm, exponent),
      0
    );

    const remainder = Math.max(0, 100 - sumFixed);

    let distributed = valid.map(({ idx, ecpm }) => ({
      idx,
      newProb: Number(((Math.pow(ecpm, exponent) / totalEcpmPower) * remainder).toFixed(2)),
      ecpm
    }));

    // Correção de arredondamento
    const drift = remainder - distributed.reduce((s, x) => s + x.newProb, 0);
    if (Math.abs(drift) >= 0.01) {
      const maxItem = distributed.reduce((p, c) => (c.ecpm > p.ecpm ? c : p));
      maxItem.newProb = Number((maxItem.newProb + drift).toFixed(2));
    }

    const byIdx = new Map(distributed.map(d => [d.idx, d.newProb]));

    return data.map((item, i) => ({
      ...item,
      prob: byIdx.has(i) ? byIdx.get(i)! : item.prob
    }));
  }

  async analyzeEcpmWithRedistribution(groups: {
    data: LinkData[],
    isFirst: boolean
  }[]): Promise<{
    data: LinkData[],
    isFirst: boolean,
    weightUsed: number,
    averageEcpm: {
      before: number,
      after: number
    }
  }[]> {
    const result = [];

    for (const { data, isFirst } of groups) {
      const weightUsed = isFirst ? 3 : 2;

      const before = await this.averageEcpm(data);
      const redistributed = await this.redistributeProbabilities(data, isFirst);
      const after = await this.averageEcpm(redistributed);

      result.push({
        data: redistributed, // já atualizado
        isFirst,
        weightUsed,
        averageEcpm: {
          before,
          after,
        }
      });
    }

    return result;
  }

}
