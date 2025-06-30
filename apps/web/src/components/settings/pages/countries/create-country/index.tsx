"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { CreateCountryModal } from "./modal-form/modal";

import { IoAdd } from "react-icons/io5";

const CreateCountry = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
        <Button onClick={() => setIsModalOpen(true)}>Novo <IoAdd /></Button>
        <CreateCountryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
};

export { CreateCountry };