"use client";

import { useEffect } from "react";
import { Input } from "@/components/ui/input";

interface RedirectFormValue {
  redirectSlug: string;
}

interface SplitFormProps {
  splitterId: number; // Retained if needed for further logic.
  value: RedirectFormValue;
  onChange: (value: RedirectFormValue) => void;
}

const SplitForm: React.FC<SplitFormProps> = ({ splitterId, value, onChange }) => {
  // Ensure the value object is initialized.
  useEffect(() => {
    if (!value) {
      onChange({ redirectSlug: "" });
    }
  }, [value, onChange]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    // Convert text to lowercase and replace spaces with hyphens while typing.
    const formattedValue = inputValue.toLowerCase().replace(/\s/g, '-');
    onChange({ redirectSlug: formattedValue });
  };

  return (
    <div className="flex flex-col space-y-2">
      <Input
        id="redirectSlug"
        type="text"
        value={value.redirectSlug}
        onChange={handleInputChange}
        placeholder="Digite o slug de redirecionamento"
        className="w-full p-6"
      />
    </div>
  );
};

export { SplitForm };
