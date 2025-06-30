"use client";

import { useState } from "react";
import { EditProjectModal } from "./modal-form/modal";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";

const EditProject: React.FC<{ projectId: number }> = ({ projectId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button variant="outline" className="bg-background hover:bg-secondary text-primary px-3" onClick={() => setIsModalOpen(true)}>
        <Edit />
      </Button>
      {isModalOpen && (
        <EditProjectModal projectId={projectId} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export { EditProject };
