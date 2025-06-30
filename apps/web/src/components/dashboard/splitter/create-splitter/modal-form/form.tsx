"use client";

import { useEffect, useState } from "react";
import { getCountries, getCategories } from "@/actions/server-actions"; // Import server actions
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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

interface SplitterFormValue {
  categoryId: string;
  countryId: string;
}

const SplitterForm: React.FC<{ value: SplitterFormValue; onChange: (value: SplitterFormValue) => void; projectId: string }> = ({ value, onChange, projectId }) => {
  const [openCountries, setOpenCountries] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);
  const [countries, setCountries] = useState<{ value: string; label: string }[]>([]);
  const [categories, setCategories] = useState<{ value: string; label: string }[]>([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedCountries = await getCountries(parseInt(projectId)) || [];
      const fetchedCategories = await getCategories() || [];
      setCountries(fetchedCountries);
      setCategories(fetchedCategories);
    }
    fetchData();
  }, [projectId]);
  

  useEffect(() => {
    if (!value) {
      onChange({ categoryId: "", countryId: "" });
    }
  }, [value, onChange]);

  const selectedCountry = countries.find((country) => country.value === value.countryId);
  const selectedCategory = categories.find((category) => category.value === value.categoryId);

  return (
    <div>
      <div className="flex flex-col space-y-3">
        <Popover open={openCategories} onOpenChange={setOpenCategories}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openCategories}
              className="w-full h-[50px] justify-between"
            >
              {selectedCategory ? selectedCategory.label : "Selecionar Categoria"}
              <ChevronsUpDown className="ml-2 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command className="w-full">
              <CommandInput placeholder="Pesquisar Categoria..." className="h-9 w-[413px]" />
              <CommandList>
                <CommandEmpty>No category found.</CommandEmpty>
                <CommandGroup>
                  {categories.map((category) => (
                    <CommandItem
                      key={category.value}
                      onSelect={() => {
                        onChange({ ...value, categoryId: category.value });
                        setOpenCategories(false);
                      }}
                    >
                      {category.label}
                      <Check
                        className={cn(
                          "ml-auto",
                          value.categoryId === category.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <Popover open={openCountries} onOpenChange={setOpenCountries}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openCountries}
              className="w-full h-[50px] justify-between"
            >
              {selectedCountry ? selectedCountry.label : "Selecionar Local/Língua"}
              <ChevronsUpDown className="ml-2 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command className="w-full">
              <CommandInput placeholder="Pesquisar Local/Língua..." className="h-9 w-[413px]" />
              <CommandList>
                <CommandEmpty>No country found.</CommandEmpty>
                <CommandGroup key={1}>
                  {countries.map((country) => (
                    <CommandItem
                      key={country.value}
                      onSelect={() => {
                        onChange({ ...value, countryId: country.value });
                        setOpenCountries(false);
                      }}
                    >
                      {country.label}
                      <Check
                        className={cn(
                          "ml-auto",
                          value.countryId === country.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default SplitterForm;
