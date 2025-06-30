"use client";

import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getLinkTypes } from "@/actions/server-actions";

export interface LinkFormValue {
  url: string;
  linkTypeId: string;
}

interface LinkFormProps {
  value: LinkFormValue;
  onChange: (value: LinkFormValue) => void;
  onError?: boolean;
}

export const LinkForm: React.FC<LinkFormProps> = ({ value, onChange, onError = false }) => {
  const [openLinkTypes, setOpenLinkTypes] = useState(false);
  const [linkTypes, setLinkTypes] = useState<{ value: string; label: string }[]>([]);

  // Busca os tipos de link ao montar o componente.
  useEffect(() => {
    async function fetchLinkTypes() {
      const fetchedLinkTypes = (await getLinkTypes()) || [];
      setLinkTypes(fetchedLinkTypes);
    }
    fetchLinkTypes();
  }, []);

  // Use um ref para garantir que o valor inicial seja configurado apenas uma vez.
  const hasInitialized = useRef(false);
  useEffect(() => {
    if (!hasInitialized.current) {
      hasInitialized.current = true;
      // Apenas configura o valor inicial se não estiver definido.
      if (!value || (value.url === "" && value.linkTypeId === "")) {
        onChange({ url: "", linkTypeId: "" });
      }
    }
  }, [value, onChange]);

  const selectedLinkType = linkTypes.find((type) => type.value === value.linkTypeId);

  return (
    <div className="flex flex-col space-y-3">
      {/* Input para a URL */}
      <Input
        type="url"
        placeholder="Digite a URL do Link"
        value={value.url}
        onChange={(e) => onChange({ ...value, url: e.target.value })}
        className={`p-6 px-4 ${onError ? "border-red-500 text-red-500" : ""}`}
      />

      {/* Popover para selecionar o tipo do link */}
      <Popover open={openLinkTypes} onOpenChange={setOpenLinkTypes}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={openLinkTypes}
            className="w-full h-[50px] justify-between"
          >
            {selectedLinkType ? selectedLinkType.label : "Selecione o tipo do Link"}
            <ChevronsUpDown className="ml-2 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command className="w-full">
            <CommandInput placeholder="Pesquisar Tipo..." className="h-9 w-[413px]" />
            <CommandList>
              <CommandEmpty>Nenhum tipo encontrado.</CommandEmpty>
              <CommandGroup>
                {linkTypes.map((type) => (
                  <CommandItem
                    key={type.value}
                    onSelect={() => {
                      onChange({ ...value, linkTypeId: type.value });
                      setOpenLinkTypes(false);
                    }}
                  >
                    {type.label}
                    <Check
                      className={`ml-auto ${value.linkTypeId === type.value ? "opacity-100" : "opacity-0"}`}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};
