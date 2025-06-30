"use client";

import { useState, useEffect, WheelEvent } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Input } from "@/components/ui/input";
import { ScrollShadow, Skeleton } from "@heroui/react";
import { Edit3, Trash, EyeOff, Import, PawPrint } from "lucide-react";

import { SaveChanges } from "../save-changes";
import { CreateLink } from "../create-link";
import { SelectType } from "./client/select-type";

import { useLinkData } from "@/contexts/links";

// Helper to round probability.
function roundProbability(prob: number): number {
  return Math.round((prob + Number.EPSILON) * 100) / 100;
}

// These are your original distribution functions.
function removeProbabilityEqually(
  links: any[],
  targetIndices: number[],
  totalAmountToRemove: number
): number {
  let remainingAmount = totalAmountToRemove;
  let activeIndices = [...targetIndices];
  while (remainingAmount > 0 && activeIndices.length > 0) {
    const share = remainingAmount / activeIndices.length;
    let updatedAny = false;
    for (let i = 0; i < activeIndices.length; i++) {
      const index = activeIndices[i];
      if (links[index].prob < share) {
        const removableAmount = links[index].prob;
        links[index].prob = 0;
        remainingAmount -= removableAmount;
        activeIndices.splice(i, 1);
        i--;
        updatedAny = true;
      }
    }
    if (!updatedAny) {
      for (const index of activeIndices) {
        links[index].prob -= share;
      }
      remainingAmount = 0;
    }
  }
  return totalAmountToRemove - remainingAmount;
}

function addProbabilityEqually(
  links: any[],
  targetIndices: number[],
  totalAmountToAdd: number
): number {
  let remainingAmount = totalAmountToAdd;
  let activeIndices = [...targetIndices];
  while (remainingAmount > 0 && activeIndices.length > 0) {
    const share = remainingAmount / activeIndices.length;
    let updatedAny = false;
    for (let i = 0; i < activeIndices.length; i++) {
      const index = activeIndices[i];
      const availableCapacity = 100 - links[index].prob;
      if (availableCapacity < share) {
        links[index].prob += availableCapacity;
        remainingAmount -= availableCapacity;
        activeIndices.splice(i, 1);
        i--;
        updatedAny = true;
      }
    }
    if (!updatedAny) {
      for (const index of activeIndices) {
        links[index].prob += share;
      }
      remainingAmount = 0;
    }
  }
  return totalAmountToAdd - remainingAmount;
}

// We add thin wrappers so we can call the above with a set of visible indices.
const removeProbabilityEquallyCustom = removeProbabilityEqually;
const addProbabilityEquallyCustom = addProbabilityEqually;

export const ShowLinks: React.FC<{ splitId: string }> = ({ splitId }) => {
  // Working state (data) and saved snapshot (savedData) from context.
  const { data, setData, savedData } = useLinkData();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data !== undefined) setIsLoading(false);
  }, [data]);

  const [sortByProbability, setSortByProbability] = useState(false);
  const [isShiftKeyPressed, setIsShiftKeyPressed] = useState(false);

  const [isProbabilityModalOpen, setIsProbabilityModalOpen] = useState(false);
  const [probabilityEditingRowIndex, setProbabilityEditingRowIndex] = useState<number | null>(null);
  const [probabilityEditValue, setProbabilityEditValue] = useState("");

  const [isEcpmModalOpen, setIsEcpmModalOpen] = useState(false);
  const [ecpmEditingRowIndex, setEcpmEditingRowIndex] = useState<number | null>(null);
  const [ecpmEditValue, setEcpmEditValue] = useState("");

  // New state for editing URL.
  const [isUrlModalOpen, setIsUrlModalOpen] = useState(false);
  const [urlEditingRowIndex, setUrlEditingRowIndex] = useState<number | null>(null);
  const [urlEditValue, setUrlEditValue] = useState("");

  // New states for UTM parameters in the URL modal.
  const [utmSource, setUtmSource] = useState("");
  const [utmMedium, setUtmMedium] = useState("");
  const [utmCampaign, setUtmCampaign] = useState("");
  const [utmTerm, setUtmTerm] = useState("");
  const [utmContent, setUtmContent] = useState("");

  // Global SHIFT key detection.
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Shift") setIsShiftKeyPressed(true);
    }
    function handleKeyUp(event: KeyboardEvent) {
      if (event.key === "Shift") setIsShiftKeyPressed(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // Updated updateProbability: Only visible (non-hidden) links participate in the calculation.
  function updateProbability(
    rowIndex: number,
    newProbability: number,
    distributeChange: boolean
  ) {
    newProbability = Math.max(0, Math.min(100, newProbability));
    const updatedLinks = data.map(link => ({ ...link }));
    const currentProbability = updatedLinks[rowIndex].prob;
    if (currentProbability === newProbability) return;

    // Build an array of indices for visible (non-hidden) items.
    const visibleIndices = updatedLinks
      .map((_, i) => i)
      .filter(i => !updatedLinks[i].hidden);
    // Find the index of the current item in the visible list.
    const currentVisibleIndex = visibleIndices.indexOf(rowIndex);
    if (currentVisibleIndex === -1) return; // Should not happen if the row is visible.

    const totalProbabilityBefore = visibleIndices.reduce(
      (acc, i) => acc + updatedLinks[i].prob,
      0
    );
    const probabilityDifference = newProbability - currentProbability;

    if (!distributeChange) {
      if (probabilityDifference > 0) {
        const remainingCapacity = 100 - totalProbabilityBefore;
        const added = Math.min(probabilityDifference, remainingCapacity);
        updatedLinks[rowIndex].prob = currentProbability + added;
      } else {
        updatedLinks[rowIndex].prob = newProbability;
      }
    } else {
      if (probabilityDifference > 0) {
        const remainingCapacity = 100 - totalProbabilityBefore;
        const added = Math.min(probabilityDifference, remainingCapacity);
        updatedLinks[rowIndex].prob = currentProbability + added;
        let extraNeeded = probabilityDifference - added;
        const subsequentVisibleIndices = visibleIndices.slice(currentVisibleIndex + 1);
        if (extraNeeded > 0 && subsequentVisibleIndices.length > 0) {
          const removed = removeProbabilityEquallyCustom(
            updatedLinks,
            subsequentVisibleIndices,
            extraNeeded
          );
          updatedLinks[rowIndex].prob = currentProbability + added + removed;
        }
      } else {
        const freed = -probabilityDifference;
        updatedLinks[rowIndex].prob = newProbability;
        const subsequentVisibleIndices = visibleIndices.slice(currentVisibleIndex + 1);
        if (freed > 0 && subsequentVisibleIndices.length > 0) {
          addProbabilityEquallyCustom(updatedLinks, subsequentVisibleIndices, freed);
        }
      }
    }

    if (sortByProbability) {
      updatedLinks.sort((a, b) => b.prob - a.prob);
    } else {
      updatedLinks.sort((a, b) => b.ecpm - a.ecpm);
    }

    const roundedLinks = updatedLinks.map(link => ({
      ...link,
      prob: roundProbability(link.prob),
    }));

    setData(roundedLinks);
  }

  function handleProbabilityWheelChange(event: WheelEvent<HTMLButtonElement>, rowIndex: number) {
    event.stopPropagation();
    const scrollDirection = event.deltaY < 0 ? 1 : -1;
    updateProbability(rowIndex, data[rowIndex].prob + scrollDirection, isShiftKeyPressed);
  }

  function openProbabilityEditModal(rowIndex: number) {
    setProbabilityEditingRowIndex(rowIndex);
    setProbabilityEditValue(String(roundProbability(data[rowIndex].prob)));
    setIsProbabilityModalOpen(true);
  }

  function saveProbabilityEdit() {
    if (probabilityEditingRowIndex === null) return;
    let parsed = parseFloat(probabilityEditValue);
    if (isNaN(parsed)) parsed = 0;
    updateProbability(probabilityEditingRowIndex, parsed, isShiftKeyPressed);
    setProbabilityEditingRowIndex(null);
    setIsProbabilityModalOpen(false);
  }

  function openEcpmEditModal(rowIndex: number) {
    setEcpmEditingRowIndex(rowIndex);
    setEcpmEditValue(String(data[rowIndex].ecpm));
    setIsEcpmModalOpen(true);
  }

  function saveEcpmEdit() {
    if (ecpmEditingRowIndex === null) return;
    let parsed = parseFloat(ecpmEditValue);
    if (isNaN(parsed)) parsed = 0;
    const updated = data.map((link, i) =>
      i === ecpmEditingRowIndex ? { ...link, ecpm: parsed } : { ...link }
    );
    if (sortByProbability) {
      updated.sort((a, b) => b.prob - a.prob);
    } else {
      updated.sort((a, b) => b.ecpm - a.ecpm);
    }
    setData(updated);
    setEcpmEditingRowIndex(null);
    setIsEcpmModalOpen(false);
  }

  // New functions to handle URL editing.
  function openUrlEditModal(rowIndex: number) {
    setUrlEditingRowIndex(rowIndex);
    const currentUrl = data[rowIndex].url;
    try {
      const urlObj = new URL(currentUrl);
      // Use the base URL (protocol + host + pathname) as the editable URL.
      const baseUrl = urlObj.origin + urlObj.pathname;
      setUrlEditValue(baseUrl);
      // Pre-populate UTM fields if they exist.
      setUtmSource(urlObj.searchParams.get("utm_source") || "");
      setUtmMedium(urlObj.searchParams.get("utm_medium") || "");
      setUtmCampaign(urlObj.searchParams.get("utm_campaign") || "");
      setUtmTerm(urlObj.searchParams.get("utm_term") || "");
      setUtmContent(urlObj.searchParams.get("utm_content") || "");
    } catch (error) {
      // If parsing fails, fallback to using the current URL and empty UTM fields.
      setUrlEditValue(currentUrl);
      setUtmSource("");
      setUtmMedium("");
      setUtmCampaign("");
      setUtmTerm("");
      setUtmContent("");
    }
    setIsUrlModalOpen(true);
  }
  

  function saveUrlEdit() {
    if (urlEditingRowIndex === null) return;
    try {
      let newUrl: URL;
      try {
        newUrl = new URL(urlEditValue);
      } catch {
        newUrl = new URL("https://" + urlEditValue);
      }
      // Set or remove UTM parameters based on field values.
      if (utmSource) {
        newUrl.searchParams.set("utm_source", utmSource);
      } else {
        newUrl.searchParams.delete("utm_source");
      }
      if (utmMedium) {
        newUrl.searchParams.set("utm_medium", utmMedium);
      } else {
        newUrl.searchParams.delete("utm_medium");
      }
      if (utmCampaign) {
        newUrl.searchParams.set("utm_campaign", utmCampaign);
      } else {
        newUrl.searchParams.delete("utm_campaign");
      }
      if (utmTerm) {
        newUrl.searchParams.set("utm_term", utmTerm);
      } else {
        newUrl.searchParams.delete("utm_term");
      }
      if (utmContent) {
        newUrl.searchParams.set("utm_content", utmContent);
      } else {
        newUrl.searchParams.delete("utm_content");
      }
  
      const finalUrl = newUrl.toString();
      const updated = data.map((link, i) =>
        i === urlEditingRowIndex ? { ...link, url: finalUrl } : { ...link }
      );
      setData(updated);
    } catch (error) {
      console.error("Invalid URL", error);
    }
    setUrlEditingRowIndex(null);
    setIsUrlModalOpen(false);
  }  

  function handleSortToggle(isToggled: boolean) {
    setSortByProbability(isToggled);
    setData(prev => {
      const copy = [...prev];
      if (isToggled) {
        copy.sort((a, b) => b.prob - a.prob);
      } else {
        copy.sort((a, b) => b.ecpm - a.ecpm);
      }
      return copy;
    });
  }

  const handleDelete = (originalIndex: number) => {
    const updated = data.filter((_, i) => i !== originalIndex);
    setData(updated);
  };

  const toggleHide = (originalIndex: number) => {
    setData((prev) => {
      const newData = [...prev];
      const link = newData[originalIndex];
      if (link.hidden) {
        // Unhiding: set hidden to false and reset prob to 0.
        newData[originalIndex] = { ...link, hidden: false, prob: 0 };
      } else {
        // Hiding: mark as hidden.
        newData[originalIndex] = { ...link, hidden: true };
      }
      return newData;
    });
  };

  // Attach originalIndex and compute visibleLinks:
  // - A link appears in the main table if either:
  //   1. Its working state is unhidden.
  //   2. It’s been toggled to hidden (unsaved change) but its saved version was visible.
  const visibleLinks = data
    .map((link, index) => ({ ...link, originalIndex: index }))
    .filter((link) => {
      // Show if not hidden.
      if (!link.hidden) return true;
      // Also show new items even if hidden.
      if (link.isNew) return true;
      // For saved items, show if the saved version was not hidden.
      if (link.id && savedData) {
        const savedLink = savedData.find((s) => s.id === link.id);
        if (savedLink && !savedLink.hidden) return true;
      }
      return false;
    });

  return (
    <div>
      <div className="flex w-full">{/* Optional header */}</div>
      {isLoading ? (
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
            {Array.from({ length: 5 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell>
                  <Skeleton className="w-[93.35px] h-6 rounded-md" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-[500px] h-6 rounded-md" />
                </TableCell>
                <TableCell className="text-center">
                  <Skeleton className="w-[120px] h-6 rounded-md" />
                </TableCell>
                <TableCell className="text-center">
                  <Skeleton className="w-[150px] h-6 rounded-md" />
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center space-x-2">
                    <Skeleton className="w-[36px] h-6 rounded-md" />
                    <Skeleton className="w-[36px] h-6 rounded-md" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : data.length === 0 ? (
        <>
          <div className="flex justify-end">
            <SaveChanges splitId={splitId} />
          </div>
          <div className="h-[65vh] flex justify-center items-center">
            <div>
              <h1 className="flex justify-center mb-5">
                <PawPrint size={100} /> <PawPrint size={60} />
              </h1>
              <p className="text-lg text-center font-bold">
                Adicione algum link e comece a editar agora mesmo!
              </p>
              <p className="text-sm text-neutral-500 mb-3 text-center">
                Você pode adicionar um ou importar diversos links de uma só vez.
              </p>
              <div className="flex justify-center space-x-3">
                <CreateLink className="p-5 w-full" splitId={splitId} />
                <Button className="p-5 w-full">
                  Importar <Import />
                </Button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex">
            <div className="flex flex-col w-full">
              <h1 className="text-[35px] font-black uppercase">Gerenciar Links</h1>
              <p className="dark:text-neutral-400 text-[12px]">
                Adicione e configure o eCPM, URL, Probabilidade e o Tipo de seus links para a rota de redirecionamento:
              </p>
            </div>
            <div className="w-full flex justify-end mb-2">
              <div className="flex items-center space-x-3">
                <SaveChanges splitId={splitId} />
                <CreateLink splitId={splitId} />
              </div>
            </div>
          </div>
          <ScrollShadow className="h-[80vh] overflow-auto" hideScrollBar size={100}>
            <Table className="mt-3">
              <TableHeader className="sticky top-0 z-10 bg-background">
                <TableRow>
                  <TableHead className="text-center text-[12px]">eCPM (USD)</TableHead>
                  <TableHead className="w-full text-[12px]">URL</TableHead>
                  <TableHead className="text-center">
                    <Toggle
                      pressed={sortByProbability}
                      onPressedChange={handleSortToggle}
                      className="cursor-pointer w-full transition-colors duration-300 flex items-center justify-center"
                    >
                      <span className="text-[12px]">Prob</span>
                    </Toggle>
                  </TableHead>
                  <TableHead className="text-center text-[12px]">Tipo</TableHead>
                  <TableHead className="text-center text-[12px]">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {visibleLinks.map((linkItem) => (
                  <TableRow
                    key={linkItem.id ?? linkItem.originalIndex}
                    className={linkItem.hidden ? "opacity-50" : ""}
                  >
                    <TableCell>
                      <Button
                        variant="outline"
                        className={`flex items-center justify-between w-full ${linkItem.isDelayed ? "bg-red-800/15 border-red-300/50 text-red-400 hover:text-red-500 hover:bg-red-500/20" : ""}`}
                        // onClick={() => openEcpmEditModal(linkItem.originalIndex)}
                        disabled={linkItem.hidden}
                      >
                        {`$${linkItem.ecpm.toFixed(2)}`}
                        {/* <Edit3 size={16} className="ml-2" /> */}
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        className="flex items-center justify-between w-full"
                        onClick={() => openUrlEditModal(linkItem.originalIndex)}
                        disabled={linkItem.hidden}
                      >
                        <span className="text-xs">{linkItem.url}</span>
                        <Edit3 size={16} className="ml-2" />
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        className={`flex relative justify-start w-[120px] ${isShiftKeyPressed ? "dark:border-neutral-500" : ""}`}
                        onClick={() => openProbabilityEditModal(linkItem.originalIndex)}
                        onWheel={(event) => handleProbabilityWheelChange(event, linkItem.originalIndex)}
                        disabled={linkItem.hidden}
                      >
                        {roundProbability(linkItem.prob)}%
                        <Edit3 size={16} className="absolute left-[90px]" />
                      </Button>
                    </TableCell>
                    <TableCell>
                      <SelectType
                        linkItem={linkItem}
                        onTypeChange={(newType: number) => {
                          const updated = data.map((link, i) =>
                            i === linkItem.originalIndex ? { ...link, type: newType } : { ...link }
                          );
                          setData(updated);
                        }}
                      />
                    </TableCell>
                    <TableCell className="flex items-center justify-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="text-red-600"
                        onClick={() => handleDelete(linkItem.originalIndex)}
                        disabled={linkItem.hidden}
                      >
                        <Trash size={16} />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => toggleHide(linkItem.originalIndex)}
                      >
                        <EyeOff size={16} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollShadow>
        </>
      )}

    {/* Modal for editing probability */}
    <Dialog open={isProbabilityModalOpen} onOpenChange={setIsProbabilityModalOpen}>
      <DialogContent className="w-full md:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Editar Probabilidade</DialogTitle>
        </DialogHeader>
        <Input
          type="number"
          value={probabilityEditValue}
          onChange={(event) => setProbabilityEditValue(event.target.value)}
          min="0"
          max="100"
          step="0.01"
          onKeyDown={(event) => {
            if (event.key === "Enter") saveProbabilityEdit();
          }}
        />
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsProbabilityModalOpen(false)}>
            Cancelar
          </Button>
          <Button
            onClick={saveProbabilityEdit}
            disabled={
              parseFloat(probabilityEditValue) < 0 ||
              parseFloat(probabilityEditValue) > 100 ||
              isNaN(parseFloat(probabilityEditValue))
            }
          >
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    {/* Modal for editing eCPM */}
    <Dialog open={isEcpmModalOpen} onOpenChange={setIsEcpmModalOpen}>
      <DialogContent className="w-full md:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Editar eCPM</DialogTitle>
        </DialogHeader>
        <Input
          type="number"
          value={ecpmEditValue}
          onChange={(event) => setEcpmEditValue(event.target.value)}
          min="0"
          step="0.01"
          onKeyDown={(event) => {
            if (event.key === "Enter") saveEcpmEdit();
          }}
        />
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsEcpmModalOpen(false)}>
            Cancelar
          </Button>
          <Button
            onClick={saveEcpmEdit}
            disabled={parseFloat(ecpmEditValue) < 0 || isNaN(parseFloat(ecpmEditValue))}
          >
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    {/* Modal for editing URL */}
    <Dialog open={isUrlModalOpen} onOpenChange={setIsUrlModalOpen}>
      <DialogContent className="w-full md:max-w-5xl">
        <DialogHeader>
          <DialogTitle>Editar URL</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {/* Base URL Input */}
          <Input
            type="text"
            value={urlEditValue}
            onChange={(event) => setUrlEditValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") saveUrlEdit();
            }}
          />

          {/* UTM Inputs */}
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center w-full border border-neutral-700 rounded-md overflow-hidden">
              <div className="bg-neutral-900 px-3 py-2 border-r border-neutral-700">
                <span className="text-sm font-medium text-neutral-400 cursor-default">utm_source</span>
              </div>
              <Input
                type="text"
                value={utmSource}
                onChange={(event) => setUtmSource(event.target.value)}
                className="flex-1 border-0 focus:ring-0 focus-visible:ring-0"
              />
            </div>

            <div className="flex items-center w-full border border-neutral-700 rounded-md overflow-hidden">
              <div className="bg-neutral-900 px-3 py-2 border-r border-neutral-700">
                <span className="text-sm font-medium text-neutral-400 cursor-default">utm_medium</span>
              </div>
              <Input
                type="text"
                value={utmMedium}
                onChange={(event) => setUtmMedium(event.target.value)}
                className="flex-1 border-0 focus:ring-0 focus-visible:ring-0"
              />
            </div>


            <div className="flex items-center w-full border border-neutral-700 rounded-md overflow-hidden">
              <div className="bg-neutral-900 px-3 py-2 border-r border-neutral-700">
                <span className="text-sm font-medium text-neutral-400 cursor-default">utm_campaign</span>
              </div>
              <Input
                type="text"
                value={utmCampaign}
                onChange={(event) => setUtmCampaign(event.target.value)}
                className="flex-1 border-0 focus:ring-0 focus-visible:ring-0"
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsUrlModalOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={saveUrlEdit}>Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  );
};
