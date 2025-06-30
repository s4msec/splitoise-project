import React from 'react';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const NavigationItem: React.FC<NavigationItemProps> = ({ expanded, icon, text, active = false, deactivated, href }) => {
  const itemContent = (
    <>
      <span className="flex justify-center items-center w-10 h-10">
        {icon}
      </span>
      <span className={`flex items-center overflow-hidden ${expanded ? "w-[160px] opacity-100 ml-3 pr-[100px]" : "w-[0px] opacity-0"} transition-all duration-300 ease-in-out`}>
        <span className="whitespace-nowrap text-[12px] mr-5">{text}</span>
      </span>
    </>
  );

  return (
    <>
      {deactivated ? (
        <li key={text} className={`relative flex items-center my-0.5 p-1 font-medium rounded-[--radius] cursor-pointer transition-colors duration-300 text-white/40 dark:text-foreground/40`}>
          {itemContent}
        </li>
      ) : (
        <TooltipProvider delayDuration={100} disableHoverableContent>
          <Tooltip>
            <TooltipTrigger className="flex items-center w-full">
              <li key={text} className={`relative flex items-center my-0.5 p-1 font-medium rounded-[--radius] cursor-pointer transition-colors duration-300 ${active ? "bg-primary/15 dark:bg-primary/20 hover:bg-primary/30 dark:hover:bg-primary/8 text-primary dark:text-primary" : "hover:bg-foreground/10 dark:hover:bg-neutral-800/50 text-foreground dark:text-foreground"}`}>
                {href ? (
                  <Link href={href} className="flex items-center w-full h-full">
                    {itemContent}
                  </Link>
                ) : itemContent}
              </li>
            </TooltipTrigger>
            {!expanded ? (
              <TooltipContent className="p-4 bg-neutral-200 text-black dark:bg-secondary dark:text-foreground shadow-lg ml-3" side="right">
                <span className='font-bold'>{text}</span>
              </TooltipContent>
            ) : null}
          </Tooltip>
        </TooltipProvider>
      )}
    </>
  );
};

export default NavigationItem;
