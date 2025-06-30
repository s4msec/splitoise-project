"use client";

import { useState } from "react";
import { createSplit } from "@/actions/server-actions";
import { SplitForm } from "./form";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

// Define the form value type.
interface RedirectFormValue {
  redirectSlug: string;
}

// Final formatting: remove duplicate hyphens and trim hyphens from start/end.
const formatSlugFinal = (text: string) => {
  let formatted = text.toLowerCase();
  formatted = formatted.replace(/-+/g, '-'); // Remove duplicate hyphens.
  formatted = formatted.replace(/^-+|-+$/g, ''); // Trim hyphens from beginning and end.
  return formatted;
};

const CreateSplitModal: React.FC<{
  splitterId: number;
  isOpen: boolean;
  onClose: () => void;
}> = ({ splitterId, isOpen, onClose }) => {
  // Use the redirectSlug field for state.
  const [formValue, setFormValue] = useState<RedirectFormValue>({ redirectSlug: "" });
  const [loading, setLoading] = useState(false);

  // Check that the field isn't empty (ignoring leading/trailing hyphens/spaces).
  const isFormComplete = formValue.redirectSlug.trim().length === 0;

  const handleSubmit = async () => {
    if (isFormComplete) return;
    setLoading(true);

    // Apply the final formatting on submit.
    const formattedSlug = formatSlugFinal(formValue.redirectSlug);

    try {
      const split = await createSplit(splitterId, formattedSlug);
      if (split) onClose();

    } catch (error) {
      console.error("Error creating Split:", error);
      alert("Error creating Split.");
    } finally {
      setTimeout(() => {
        setLoading(false);
        setFormValue({ redirectSlug: "" });
      }, 500);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setFormValue({ redirectSlug: "" });
    }, 500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar Split</DialogTitle>
          <DialogDescription>
            Todos os espaços serão automaticamente substituídos por hífens e o texto ficará em minúsculo.
          </DialogDescription>
        </DialogHeader>
        <SplitForm splitterId={splitterId} value={formValue} onChange={setFormValue} />
        <DialogFooter>
          <Button
            className="dark:bg-primary-foreground dark:text-white hover:dark:bg-neutral-800 transition-all p-6"
            onClick={handleClose}
          >
            Cancelar
          </Button>
          <Button className="p-6" onClick={handleSubmit} disabled={isFormComplete || loading}>
            {loading ? <Loader className="animate-spin" /> : "Salvar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { CreateSplitModal };
