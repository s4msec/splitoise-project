"use client";

import * as React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { deleteProject } from "@/actions/server-actions";
import { useRouter } from "next/navigation";

interface DeleteButtonProps {
  projectId: number;
}

export function DeleteButton({ projectId }: DeleteButtonProps) {
  const router = useRouter();

  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      await deleteProject(projectId);
      router.push("/projects");
    } catch (error) {
      console.error("Error deleting project:", error);
      alert("Erro ao deletar o projeto.");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {/* Use um <div> wrapper que impede a propagação do clique */}
        <div onClick={(e) => { e.stopPropagation(); e.preventDefault(); }}>
          <Button variant="outline" className="bg-background hover:bg-secondary text-primary px-3">
            <Trash />
          </Button>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent
        onClick={(e) => { e.stopPropagation(); e.preventDefault(); }}
      >
        <AlertDialogHeader>
          <AlertDialogTitle>Tem certeza que deseja deletar?</AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação não pode ser desfeita. O projeto e todos os dados relacionados serão deletados em cascata.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={(e) => { e.stopPropagation(); e.preventDefault(); }}
          >
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
