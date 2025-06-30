"use client";

import { useState } from "react";
import { uploadProjectIcon, createProject } from "@/actions/server-actions";
import ProjectForm from "./form";

import { UploadImage } from "./upload-image";
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

const CreateProjectModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [formValue, setFormValue] = useState({ name: "", description: "" });
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const isFormComplete = !formValue.name || !formValue.description || !image;

  const handleSubmit = async () => {
    if (isFormComplete) return;
    setLoading(true);

    try {
      const formData = new FormData();
      if (image) formData.append("icon", image);

      const uploadedImagePath = await uploadProjectIcon(formData);
      if (!uploadedImagePath) throw new Error("Failed to upload image");

      const userId = 1; // Replace with actual logged-in user ID
      const project = await createProject(userId, formValue.name, formValue.description, uploadedImagePath);
      
      if (project) onClose(); // Close modal after success
    } catch (error) {
      console.error("Error creating project:", error);
      alert("Error creating project.");
    } finally {
      setTimeout(() => {
        setLoading(false);
        setFormValue({ name: "", description: "" });
        setImage(null);
      }, 500)
    }
  };

  const handleClose = () => {
    onClose(); // Close the modal
    setTimeout(() => {
      setFormValue({ name: "", description: "" });
      setImage(null);
    }, 500)
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <div className="grid grid-cols-4">
          <UploadImage value={image} onChange={setImage} />
          <div className="col-span-3 space-y-3">
            <DialogHeader>
              <DialogTitle>Criar Projeto</DialogTitle>
            </DialogHeader>
            <DialogDescription className="text-justify">
              Um projeto é onde será armazenado todas as splits, separadas por categoria e país. Por favor, preencha as seguintes informações:
            </DialogDescription>
          </div>
        </div>
        <ProjectForm value={formValue} onChange={setFormValue} />
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

export { CreateProjectModal };
