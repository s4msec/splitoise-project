"use client";

import { useState, useEffect } from "react";
import { LinkForm, LinkFormValue } from "./form";
import { useLinkData } from "@/contexts/links";
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
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

interface CreateLinkModalProps {
  splitId: string;
  isOpen: boolean;
  onClose: () => void;
}

export const CreateLinkModal: React.FC<CreateLinkModalProps> = ({
  splitId,
  isOpen,
  onClose,
}) => {
  const [formValue, setFormValue] = useState<LinkFormValue>({ url: "", linkTypeId: "" });
  const [loading, setLoading] = useState(false);
  const [urlError, setUrlError] = useState(false);

  const { setData } = useLinkData();
  const { toast } = useToast();

  const isFormIncomplete = !formValue.url || !formValue.linkTypeId;

  // Quando o usuário modificar a URL, se ela se tornar válida, remove o erro
  useEffect(() => {
    const urlRegex = /^https?:\/\/[\w.-]+\.[a-z]{2,}(\/.*)?$/i;
    if (urlError && urlRegex.test(formValue.url)) {
      setUrlError(false);
    }
  }, [formValue.url, urlError]);

  const handleSubmit = async () => {
    if (isFormIncomplete) return;

    // Validação: URL deve começar com http:// ou https:// e ter um domínio válido
    const urlRegex = /^https?:\/\/[\w.-]+\.[a-z]{2,}(\/.*)?$/i;
    if (!urlRegex.test(formValue.url)) {
      setUrlError(true);
      toast({
        title: "URL inválida",
        description: "Ela deve começar com http:// ou https:// e conter um domínio válido.",
        action: (
          <ToastAction altText="Entendi" onClick={() => {}}>
            Entendi
          </ToastAction>
        ),
        variant: "destructive"
      });
      return;
    }

    setLoading(true);

    try {
      // Cria um novo link localmente, incluindo a propriedade splitId
      const newLink = {
        id: Date.now(), // id temporário
        hidden: false,
        url: formValue.url,
        type: parseInt(formValue.linkTypeId),
        ecpm: 0,
        prob: 0,
        splitId: parseInt(splitId),
        isNew: true
      };

      setData((prevData) => [...prevData, newLink]);
      onClose();
    } catch (error) {
      console.error("Error creating Link:", error);
      toast({
        title: "Erro",
        description: "Erro ao criar o Link.",
        variant: "destructive"
      });
    } finally {
      setTimeout(() => {
        setLoading(false);
        setFormValue({ url: "", linkTypeId: "" });
      }, 500);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setFormValue({ url: "", linkTypeId: "" });
      setUrlError(false);
    }, 500);
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          onClose(); // Apenas dispara onClose ao fechar o diálogo
        }
      }}
    >
      <DialogContent>
        <div className="grid grid-cols-4">
          <div className="col-span-3 space-y-3">
            <DialogHeader>
              <DialogTitle>Criar Link</DialogTitle>
            </DialogHeader>
            <DialogDescription className="text-justify">
              Este link ficará disponível para o sistema de redistribuição de rotas do split:
            </DialogDescription>
          </div>
        </div>
        {/* 
          É necessário que o componente LinkForm utilize a propriedade "error" para aplicar as classes de erro 
          (por exemplo: "border-red-500 text-red-500") ao seu input.
        */}
        <LinkForm value={formValue} onChange={setFormValue} onError={urlError} />
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
            disabled={isFormIncomplete || loading}
          >
            {loading ? <Loader className="animate-spin" /> : "Salvar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
