"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updateSplit } from "@/actions/server-actions"; // Server action import

/**
 * Props for the settings modal:
 * - splitId: the ID of the split to update (not used by the new API but retained for compatibility).
 * - redirectSlug: the current slug to display and edit.
 * - onOpenChange: controls the open state of the dialog.
 * - onDelete: callback to delete the split.
 */
interface SettingsModalProps {
  splitId: number;
  redirectSlug: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onDelete: () => void;
}

// Final formatting: remove duplicate hyphens and trim hyphens from start/end.
const formatSlugFinal = (text: string) => {
  let formatted = text.toLowerCase();
  formatted = formatted.replace(/-+/g, '-'); // Remove duplicate hyphens.
  formatted = formatted.replace(/^-+|-+$/g, ''); // Trim hyphens from beginning and end.
  return formatted;
};

export function SettingsModal({
  splitId,
  redirectSlug,
  open,
  onOpenChange,
  onDelete,
}: SettingsModalProps) {
  const [deleteAlertOpen, setDeleteAlertOpen] = React.useState(false);
  const [newSlug, setNewSlug] = React.useState(redirectSlug);

  // Update local state when the redirectSlug prop changes.
  React.useEffect(() => {
    setNewSlug(redirectSlug);
  }, [redirectSlug]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    // Convert text to lowercase and replace spaces with hyphens while typing.
    const formattedValue = inputValue.toLowerCase().replace(/\s/g, '-');
    setNewSlug(formattedValue);
  };

  /**
   * On save, apply the final formatting on newSlug.
   * If the formatted slug is different from the current one, call the server action updateSplit
   * with currentRedirectSlug and newRedirectSlug. Otherwise, just close the modal.
   */
  async function handleSave() {
    const formattedSlug = formatSlugFinal(newSlug);
    const currentFormatted = formatSlugFinal(redirectSlug);
    if (formattedSlug === currentFormatted) {
      onOpenChange(false);
    } else {
      try {
        await updateSplit(redirectSlug, formattedSlug);
        onOpenChange(false);
      } catch (error) {
        console.error("Error updating split:", error);
        // Optionally, display an error message to the user.
      }
    }
  }

  /**
   * Confirms deletion, closes dialogs, and calls the delete callback.
   */
  function handleConfirmDelete() {
    onDelete();
    setDeleteAlertOpen(false);
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Configurar Split</DialogTitle>
          <DialogDescription>
            Edite o redirect slug ou exclua completamente este split.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <label className="flex flex-col space-y-1">
            <span className="text-sm font-medium">Redirect Slug</span>
            <Input value={newSlug} onChange={handleInputChange} />
          </label>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button onClick={handleSave}>Salvar</Button>

          {/* AlertDialog for confirming deletion */}
          <AlertDialog open={deleteAlertOpen} onOpenChange={setDeleteAlertOpen}>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Excluir</Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                <AlertDialogDescription>
                  Isso irá excluir o redirect <strong>{redirectSlug}</strong> e todos os links configurados
                  associados a este split.
                </AlertDialogDescription>
              </AlertDialogHeader>

              <AlertDialogFooter>
                <Button variant="outline" onClick={() => setDeleteAlertOpen(false)}>
                  Cancelar
                </Button>
                <Button variant="destructive" onClick={handleConfirmDelete}>
                  Excluir
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
