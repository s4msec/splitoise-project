"use client";

import React from "react";
import { useLinkData } from "@/contexts/links";

interface AverageECPMProps {
  disabled?: boolean;
}

const AverageECPM: React.FC<AverageECPMProps> = ({disabled = false}) => {
  const { data } = useLinkData();

  // Use only visible (non-hidden) items.
  const visibleData = data.filter((item) => !item.hidden);
  const totalProb = visibleData.reduce((acc, item) => acc + (item.prob || 0), 0);
  const weightedSum = visibleData.reduce(
    (acc, item) => acc + (item.prob || 0) * item.ecpm,
    0
  );
  const weightedAverage = totalProb > 0 ? weightedSum / totalProb : 0;
  const formattedAverage = `$${weightedAverage.toFixed(2)}`;

  return (
    <div className="flex items-center h-[36px] rounded-md transition-all cursor-default">
      <div className="flex items-center bg-gradient-to-r from-secondary via-secondary to-neutral-800 h-full rounded-l-md">
        <span className={`text-[12px] ${disabled ? "text-neutral-600" : "text-neutral-400"} ml-3 mr-2`}>{formattedAverage}</span>
      </div>
      <div className="flex items-center dark:bg-neutral-700 h-full rounded-r-md px-2">
        <span className="text-[10px] font-black">eCPM</span>
      </div>
    </div>
  );
};

export { AverageECPM };
