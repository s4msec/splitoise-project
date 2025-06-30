"use client";

import { PieChart, Pie, Cell } from "recharts";
import { ChartContainer, ChartConfig } from "@/components/ui/chart";
import { useLinkData } from "@/contexts/links";

const chartConfig: ChartConfig = {};

interface ProbabilityIndicatorProps {
  disabled?: boolean;
}

export const ProbabilityIndicator: React.FC<ProbabilityIndicatorProps> = ({
  disabled = false,
}) => {
  const { data } = useLinkData();

  // Only use visible (non-hidden) items for calculations.
  const visibleData = data.filter((item) => !item.hidden);
  const totalProb = visibleData.reduce((acc, item) => acc + (item.prob || 0), 0);
  const percent = Math.max(0, Math.min(totalProb, 100));
  const formattedPercent = `${percent.toFixed(2)}%`;

  const pieData = [
    { name: "filled", value: percent },
    { name: "empty", value: 100 - percent },
  ];

  return (
    <div className="flex items-center bg-secondary rounded-md cursor-default">
      <div className="flex items-center bg-gradient-to-r from-secondary via-secondary to-neutral-800 h-full rounded-l-md">
        <div
          className="flex items-center justify-center ml-2"
          style={{ width: "20px", height: "20px" }}
        >
          {!disabled && (
            <ChartContainer config={chartConfig} style={{ width: "20px", height: "20px" }}>
              <PieChart width={20} height={20}>
                <Pie
                  data={pieData}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                  innerRadius={5}
                  outerRadius={10}
                  stroke="none"
                >
                  <Cell key="filled" fill="white" />
                  <Cell key="empty" fill="rgb(39 39 42)" />
                </Pie>
              </PieChart>
            </ChartContainer>
          )}
        </div>
        <span className={`text-[11px] ${disabled ? "text-neutral-600" : "text-neutral-400"} ml-2 mr-2`}>{formattedPercent}</span>
      </div>
      <div className="flex items-center dark:bg-neutral-700 h-full rounded-r-md px-2">
        <span className="text-[11px] font-black">prob</span>
      </div>
    </div>
  );
};
