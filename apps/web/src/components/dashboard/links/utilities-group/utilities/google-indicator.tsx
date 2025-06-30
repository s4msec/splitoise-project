"use client";

import React from "react";

import Image from "next/image";
import AdManagerLogo from "@/../public/resources/admanager-logo.png";

interface GoogleIndicatorProps {
  disabled?: boolean;
  isGoogleDelayed?: boolean;
  googleHour?: string;
}

const GoogleIndicator: React.FC<GoogleIndicatorProps> = ({disabled = false, isGoogleDelayed, googleHour}) => {
  return (
    <div className="flex items-center h-[36px] rounded-md transition-all cursor-default">
      <div className={`flex items-center bg-neutral-800 h-full rounded-l-md`}>
        <span className={`text-[12px] ${disabled ? "text-neutral-600" : "text-neutral-400"} ml-3 mr-2`}>{disabled ? "00:00h" : `${googleHour}:00h`}</span>
      </div>
      <div className={`flex items-center ${isGoogleDelayed ? "dark:bg-red-500/20" : "dark:bg-neutral-700"} h-full rounded-r-md px-2`}>
        <div className="w-[20px]">
            <Image src={AdManagerLogo} width={20} height={20} alt="admanager logo" />
        </div>
      </div>
    </div>
  );
};

export { GoogleIndicator };
