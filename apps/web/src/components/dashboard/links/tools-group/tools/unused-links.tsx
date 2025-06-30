"use client";

import React from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { EyeIcon, Edit3, Dog } from "lucide-react";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { useLinkData } from "@/contexts/links";
import { SelectType } from "../../show-links/client/select-type";
import { ScrollShadow } from "@heroui/react";

const UnusedLinks: React.FC = () => {
  const { data, setData } = useLinkData();

  const handleToggleHidden = (id: number) => {
    setData((prevData) => {
      const visibleItemsSum = prevData
        .filter((link) => !link.hidden)
        .reduce((acc, link) => acc + link.prob, 0);
  
      return prevData.map((link) => {
        if (link.id === id) {
          if (link.hidden) {
            const newProb = Math.max(100 - visibleItemsSum, 0);
            return { ...link, hidden: false, prob: newProb };
          } else {
            return { ...link, hidden: true, prob: 0 };
          }
        }
        return link;
      });
    });
  };
  
  const roundProbability = (prob: number) => Math.round(prob);
  const unusedLinks = data.filter((link) => link.hidden);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon">
          <EyeIcon />
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="w-full flex flex-col items-center p-4 h-[50vh]">
          <div className="w-[90vh] md:w-[90vh] lg:w-[195vh]">
          <DrawerHeader className="flex w-full border rounded-lg items-center">
            <div className="w-full">
              <DrawerTitle>Links Escondidos</DrawerTitle>
              <DrawerDescription>
                Esses links não são utilizados no cálculo de rota do split.
              </DrawerDescription>
            </div>
            <div className="flex justify-end w-full">
              <DrawerClose asChild>
                <Button variant="outline">Fechar</Button>
             </DrawerClose>
            </div>
          </DrawerHeader>

          {unusedLinks.length === 0 ? (
            <div className="h-full flex flex-col justify-center items-center py-20 space-y-2">
              <h1><Dog size={150} /></h1>
              <p className="text-sm font-medium dark:text-neutral-400">Não há nada aqui! (Por enquanto...)</p>
            </div>
          ) : (
            <ScrollShadow className="h-[40vh] overflow-auto" hideScrollBar>
            <Table className="mt-3">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">eCPM ($)</TableHead>
                  <TableHead className="w-full">URL</TableHead>
                  <TableHead className="text-center">Prob</TableHead>
                  <TableHead className="text-center">Tipo</TableHead>
                  <TableHead className="text-center">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {unusedLinks.map((linkItem) => (
                  <TableRow key={linkItem.id}>
                    <TableCell>
                      <Button
                        disabled={linkItem.hidden}
                        variant="outline"
                        className="flex items-center justify-between w-full transition-all duration-300 ease-in-out"
                      >
                        {linkItem.ecpm.toFixed(2)}
                        <Edit3 size={16} className="ml-2" />
                      </Button>
                    </TableCell>
                    <TableCell>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs transition-colors dark:text-neutral-500"
                      >
                        {linkItem.url}
                      </a>
                    </TableCell>
                    <TableCell className="text-center">
                      <Button
                        disabled={linkItem.hidden}
                        variant="outline"
                        className="flex relative justify-start w-[120px] transition-all duration-300 ease-in-out"
                      >
                        {roundProbability(linkItem.prob)}%
                        <Edit3 size={16} className="absolute left-[90px]" />
                      </Button>
                    </TableCell>
                    <TableCell className="text-center">
                      <SelectType
                        linkItem={linkItem}
                        onTypeChange={(newType: number) => {
                          const updatedLinks = data.map((link) =>
                            link.id === linkItem.id ? { ...link, type: newType } : link
                          );
                          setData(updatedLinks);
                        }}
                      />
                    </TableCell>
                    <TableCell className="flex items-center justify-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleToggleHidden(linkItem.id)}
                      >
                        <EyeIcon size={16} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </ScrollShadow>
          )}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export { UnusedLinks };
