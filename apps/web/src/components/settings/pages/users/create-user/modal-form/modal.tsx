import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { UploadImage } from "./upload-image";
import { CountryForm } from "./form";
import { Loader } from "lucide-react";

import { uploadCountryIcon, createCountry } from "@/actions/server-actions";

const CreateCountryModal: React.FC<UploadIconModalProps> = ({ isOpen, onClose }) => {
  const [formValue, setFormValue] = useState<CountryForm>({
    name: "",
    redirectMessage: "",
  });
  const [image, setImage] = useState<UploadedCountryIcon | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const isFormComplete = !(formValue.name && formValue.redirectMessage);

  const handleSubmit = async () => {
    if (isFormComplete) return;
    setIsLoading(true);

    try {
      const formData = new FormData();
      
      if (image) {
        formData.append("icon", image.file)
      };

      const uploadedImagePath = await uploadCountryIcon(formData);
      if (!uploadedImagePath) throw new Error("Failed to upload image");

      const country = await createCountry(formValue.name, formValue.redirectMessage, uploadedImagePath);
      if (country) {
        onClose();
        setTimeout(() => {
          setIsLoading(false);
          setFormValue({ name: "", redirectMessage: "" });
          setImage(null);
        }, 500)
      }

    } catch (error) {
      console.error("Error creating project:", error);
      alert("Error creating project.");
    }
  };

  const handleClose = () => {
    onClose(); // Close the modal
    setTimeout(() => {
      setFormValue({ name: "", redirectMessage: "" });
      setImage(null);
    }, 500)
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
            <div className="flex flex-col">
                <div className="space-y-3">
                    <DialogHeader>
                        <DialogTitle>Novo Local / Idioma</DialogTitle>
                    </DialogHeader>
                    <DialogDescription className="text-justify">
                        Preencha as informações abaixo para configurar o seu local/idioma, que ficará disponível para uso em seus projetos:
                    </DialogDescription>
                </div>

                <div className="flex flex-row mt-5 space-x-3">
                  <div>
                      <UploadImage value={image} onChange={setImage} />
                  </div>

                  <CountryForm value={formValue} onChange={setFormValue} />
                </div>

            </div>
            <DialogFooter>
                <Button variant={"secondary"} className="p-6" onClick={handleClose}>Cancelar</Button>
                <Button className="p-6" onClick={handleSubmit} disabled={isFormComplete || isLoading}>{isLoading ? <Loader className="animate-spin" /> : "Salvar"}</Button>
            </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export {CreateCountryModal};
