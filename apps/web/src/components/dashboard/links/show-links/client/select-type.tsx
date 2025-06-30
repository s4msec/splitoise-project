"use client";

import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface SelectTypeProps {
  linkItem: LinkData;
  onTypeChange: (newType: number) => void;
}

const SelectType: React.FC<SelectTypeProps> = ({ linkItem, onTypeChange }) => {
  return (
    <Select
      disabled={linkItem.hidden} // Disable the select if the link is hidden.
      value={String(linkItem.type)} // Convert the number to a string for the select's value.
      onValueChange={(newType) => {
        // Convert the string value to a number and pass it to the parent.
        onTypeChange(Number(newType));
      }}
    >
      <SelectTrigger className="w-[150px] transition-all duration-300">
        <SelectValue placeholder="Selecione o tipo" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">Artigo</SelectItem>
        <SelectItem value="2">Landing Page</SelectItem>
      </SelectContent>
    </Select>
  );
};

export { SelectType };
