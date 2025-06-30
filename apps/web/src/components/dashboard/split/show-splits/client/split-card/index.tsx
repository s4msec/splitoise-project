"use client";

import { useRef, useState, useMemo, useCallback, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import { Card, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { Settings } from "lucide-react";
import { SettingsModal } from "./modal";

interface SplitInsight {
  ecpm: number;
  prob: number;
}

interface SplitCardProps {
  index: number;
  splitId: number;
  redirectSlug: string;
  splitInsights: SplitInsight;
  onDelete?: () => void;
}

function SplitCard({
  index,
  splitId,
  redirectSlug,
  splitInsights,
  onDelete,
}: SplitCardProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [cardWidth, setCardWidth] = useState<number>(0);
  const [menuPosition, setMenuPosition] = useState({ left: 0, top: 0 });

  const cardRef = useRef<HTMLDivElement>(null);

  // When the menu opens, measure the card and calculate dropdown position.
  useEffect(() => {
    if (isMenuOpen && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setCardWidth(rect.width);
      const estimatedDropdownHeight = 120; // Adjust as needed.
      const availableBelow = window.innerHeight - rect.bottom;
      if (availableBelow < estimatedDropdownHeight) {
        // Not enough space below: open above the card.
        setMenuPosition({ left: rect.left, top: rect.top - estimatedDropdownHeight });
      } else {
        // Enough space: open below the card.
        setMenuPosition({ left: rect.left, top: rect.bottom });
      }
    }
  }, [isMenuOpen]);

  // Open dropdown only on right-click.
  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(true);
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const ecpmFormatter = useMemo(
    () =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      }),
    []
  );
  const percentFormatter = useMemo(
    () =>
      new Intl.NumberFormat("en-US", {
        style: "percent",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    []
  );

  const formattedEcpm =
    splitInsights?.ecpm != null ? ecpmFormatter.format(splitInsights.ecpm) : "$0.00";
  const formattedProb =
    splitInsights?.prob != null ? percentFormatter.format(splitInsights.prob / 100) : "0.00%";

  function handleDeleteSplit() {
    console.log("Split deletado:", splitId);
  }

  return (
    <>
      <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <div
          ref={cardRef}
          onContextMenu={handleContextMenu}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link href={`${splitId}/links`}>
            <Card
              className={`relative cursor-pointer transition-all rounded-lg shadow-none ${
                isMenuOpen
                  ? "border border-blue-500"
                  : "hover:border-neutral-700 hover:dark:border-neutral-500"
              }`}
            >
              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 backdrop-blur-sm rounded-lg ${
                  isHovered || isMenuOpen ? "opacity-100" : "opacity-0"
                } bg-black/50`}
              >
                <span className="text-white text-[16px] font-bold text-center px-4 break-words max-w-[80%]">
                  {redirectSlug}
                </span>
              </div>
              <CardHeader className="space-y-5 w-full flex items-center justify-center">
                <h1 className="text-[30px] font-black">{index}</h1>
              </CardHeader>
            </Card>
          </Link>
        </div>

        {/* Hidden trigger to satisfy DropdownMenu structure */}
        <DropdownMenuTrigger asChild>
          <span className="hidden" />
        </DropdownMenuTrigger>

        <DropdownMenuPortal>
          <DropdownMenuContent
            style={{
              width: cardWidth,
              position: "fixed",
              top: menuPosition.top,
              left: menuPosition.left,
            }}
          >
            <DropdownMenuLabel className="flex justify-center space-x-1 items-center">
              <span>{formattedEcpm}</span>
              <span className="text-[10px] font-black dark:text-white">eCPM</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuLabel className="flex justify-center space-x-1 items-center">
              <span>{formattedProb}</span>
              <span className="text-[10px] font-black dark:text-white">prob</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="flex justify-center cursor-pointer"
              onClick={() => {
                setIsSettingsOpen(true);
                setIsMenuOpen(false);
              }}
            >
              <Settings className="mr-2" />
              Configurar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>

      <SettingsModal
        splitId={splitId}
        open={isSettingsOpen}
        onOpenChange={setIsSettingsOpen}
        redirectSlug={redirectSlug}
        onDelete={handleDeleteSplit}
      />
    </>
  );
}

export { SplitCard };
