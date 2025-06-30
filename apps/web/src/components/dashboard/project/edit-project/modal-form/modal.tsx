"use client";

import { useState } from "react";
import { uploadProjectIcon, updateProjectIcon } from "@/actions/server-actions";
import { UploadImage } from "../../create-project/modal-form/upload-image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

const EditProjectModal: React.FC<{ projectId: number; isOpen: boolean; onClose: () => void }> = ({ projectId, isOpen, onClose }) => {
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const isFormIncomplete = !image;

  const handleSubmit = async () => {
    if (isFormIncomplete) return;
    setLoading(true);
    try {
      const formData = new FormData();
      if (image) formData.append("icon", image);

      const uploadedImagePath = await uploadProjectIcon(formData);
      if (!uploadedImagePath) throw new Error("Failed to upload image");

      const updated = await updateProjectIcon(projectId, uploadedImagePath);
      if (updated) onClose();
    } catch (error) {
      console.error("Error updating project:", error);
      alert("Error updating project.");
    } finally {
      setTimeout(() => {
        setLoading(false);
        setImage(null);
      }, 500);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setImage(null);
    }, 500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Imagem do Projeto</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <UploadImage value={image} onChange={setImage} />
        </div>
        <DialogFooter>
          <Button
            className="dark:bg-primary-foreground dark:text-white hover:dark:bg-neutral-800 transition-all p-6"
            onClick={handleClose}
          >
            Cancelar
          </Button>
          <Button className="p-6" onClick={handleSubmit} disabled={isFormIncomplete || loading}>
            {loading ? <Loader className="animate-spin" /> : "Salvar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { EditProjectModal };
