"use client";

import { useState } from "react";
import { createSplitter } from "@/actions/server-actions";
import SplitterForm from "./form";

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

const CreateSplitterModal: React.FC<{ projectId: string, isOpen: boolean; onClose: () => void }> = ({ projectId, isOpen, onClose }) => {
  const [formValue, setFormValue] = useState({ categoryId: "", countryId: "" });
  const [loading, setLoading] = useState(false);

  const isFormComplete = !formValue.categoryId || !formValue.countryId;

  const handleSubmit = async () => {
    if (isFormComplete) return;
    setLoading(true);

    try {
      const splitter = await createSplitter(projectId, formValue.categoryId, formValue.countryId);
      if (splitter) onClose();

    } catch (error) {
      console.error("Error creating Splitter:", error);
      alert("Error creating Splitter.");
    } finally {
      setTimeout(() => {
        setLoading(false);
        setFormValue({ categoryId: "", countryId: "" });
      }, 500)
    }
  };

  const handleClose = () => {
    onClose(); // Close the modal
    setTimeout(() => {
      setFormValue({ categoryId: "", countryId: "" });
    }, 500)
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <div className="grid grid-cols-4">
          <div className="col-span-3 space-y-3">
            <DialogHeader>
              <DialogTitle>Criar Splitter</DialogTitle>
            </DialogHeader>
            <DialogDescription className="text-justify">
              Um splitter é onde será armazenado os seus splits, utilizados para funil e broadcasting, preencha os campos abaixo:
            </DialogDescription>
          </div>
        </div>
        <SplitterForm projectId={projectId} value={formValue} onChange={setFormValue} />
        <DialogFooter>
          <Button
              className="dark:bg-primary-foreground dark:text-white hover:dark:bg-neutral-800 transition-all p-6"
              onClick={handleClose}
            >
            Cancelar
          </Button>
          <Button
            className="p-6"
            onClick={handleSubmit}
            disabled={isFormComplete || loading}
          >
            {loading ? <Loader className="animate-spin" /> : "Salvar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { CreateSplitterModal };
