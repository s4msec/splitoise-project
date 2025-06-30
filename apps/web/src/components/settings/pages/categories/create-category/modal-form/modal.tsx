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
import { CategoryForm } from "./form";
import { Loader } from "lucide-react";

import { createCategory } from "@/actions/server-actions";

const CreateCategoryModal: React.FC<UploadIconModalProps> = ({ isOpen, onClose }) => {
  const [formValue, setFormValue] = useState<CategoryForm>({
    name: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const isFormComplete = !(formValue.name && formValue.description);

  const handleSubmit = async () => {
    if (isFormComplete) return;
    setIsLoading(true);

    try {
      const category = await createCategory(formValue.name, formValue.description);
      
      if (category) {
        onClose();
        setTimeout(() => {
          setIsLoading(false);
          setFormValue({ name: "", description: "" });
        }, 500)
      }

    } catch (error) {
      console.error("Error creating category:", error);
      alert("Error creating category.");
    }
  };

  const handleClose = () => {
    onClose(); // Close the modal
    setTimeout(() => {
      setFormValue({ name: "", description: "" });
    }, 500)
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
            <div className="flex flex-col">
                <div className="space-y-3">
                    <DialogHeader>
                        <DialogTitle>Nova Categoria</DialogTitle>
                    </DialogHeader>
                    <DialogDescription className="text-justify">
                        Preencha as informações abaixo para configurar a sua nova categoria, que ficará disponível para uso em seus projetos:
                    </DialogDescription>
                </div>

                <div className="flex flex-row mt-5 space-x-3">
                  <CategoryForm value={formValue} onChange={setFormValue} />
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

export {CreateCategoryModal};
