"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { CreateCategoryModal } from "./modal-form/modal";

import { IoAdd } from "react-icons/io5";

const CreateCategory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
        <Button onClick={() => setIsModalOpen(true)}>Novo <IoAdd /></Button>
        <CreateCategoryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
};

export { CreateCategory };