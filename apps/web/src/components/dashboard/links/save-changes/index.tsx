"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { useLinkData } from "@/contexts/links";
import { createLinks, updateLinks, deleteLinks } from "@/actions/server-actions";

interface SaveChangesProps {
  splitId: string;
}

// Helper to remove transient properties.
const cleanLink = (link: any) => {
  const { isNew, ...rest } = link;
  return rest;
};

// Helper to convert the hidden value to a Boolean.
// If hidden is either the Boolean true or the string "true", it returns true.
const parseHidden = (hiddenValue: any): boolean => {
  return hiddenValue === true || hiddenValue === "true";
};

export const SaveChanges: React.FC<SaveChangesProps> = ({ splitId }) => {
  const { data, saveData, savedData, skipHistoryNextUpdate } = useLinkData();
  const [isLoading, setIsLoading] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Compare clean data with savedData.
  useEffect(() => {
    if (isSaving) {
      setHasChanges(false);
    } else {
      const cleanedData = data.map(cleanLink);
      setHasChanges(JSON.stringify(cleanedData) !== JSON.stringify(savedData));
    }
  }, [data, savedData, isSaving]);

  const handleSave = useCallback(async () => {
    setIsLoading(true);
    setIsSaving(true);
    try {
      let createdLinks: any[] = [];
      let updatedLinksResponse: any[] = [];

      // Process new/restored items.
      const itemsToCreate = data.filter(
        (item) => item.isNew || (item.id && !savedData.find((s) => s.id === item.id))
      );
      
      if (itemsToCreate.length > 0) {
        const payload = itemsToCreate.map((item) => ({
          splitId: item.splitId ? Number(item.splitId) : Number(splitId),
          url: item.url,
          type: Number(item.type),
          prob: item.prob !== undefined ? Number(item.prob) : 0,
          ecpm: item.ecpm !== undefined ? Number(item.ecpm) : 0,
          // Here we explicitly parse the hidden property to a Boolean.
          hidden: parseHidden(item.hidden),
        }));
        createdLinks = await createLinks(payload);
      }

      // Process updated items.
      if (data.some((item) => !item.isNew && item.id)) {
        const updatedItems = data.filter((item) => {
          if (!item.id) return false;
          const original = savedData.find((init) => init.id === item.id);
          return original && JSON.stringify(cleanLink(item)) !== JSON.stringify(original);
        });
        if (updatedItems.length > 0) {
          updatedLinksResponse = await updateLinks(updatedItems);
        }
      }

      // Process deleted items.
      const deletedItems = savedData.filter((init) => {
        return !data.some((item) => item.id === init.id);
      });
      if (deletedItems.length > 0) {
        const deletedIds = deletedItems.map((item) => item.id);
        await deleteLinks(deletedIds);
      }

      // Rebuild new state.
      const newData = data.map((item) => {
        if (item.isNew || (item.id && !savedData.find((s) => s.id === item.id))) {
          const created = createdLinks.shift();
          if (created) {
            return cleanLink(created);
          }
          // Ensure that hidden is passed correctly for new items.
          return cleanLink({ ...item, isNew: false, hidden: parseHidden(item.hidden) });
        } else {
          const updated = updatedLinksResponse.find((u: any) => u.id === item.id);
          return updated ? cleanLink(updated) : cleanLink(item);
        }
      });

      // Do not filter out hidden items here.
      skipHistoryNextUpdate();
      saveData(newData);
    } catch (error) {
      console.error("Error saving changes:", error);
    } finally {
      setIsSaving(false);
      setIsLoading(false);
    }
  }, [data, splitId, saveData, savedData, skipHistoryNextUpdate]);

  return (
    <div
      className={`flex items-center justify-center h-16 transition-all ${
        hasChanges ? "opacity-100" : "opacity-0"
      }`}
    >
      <Button onClick={handleSave} disabled={!hasChanges || isLoading}>
        {isLoading ? <Loader className="animate-spin" /> : "Salvar Mudanças"}
      </Button>
    </div>
  );
};
