import { Input } from "@/components/ui/input";
import { useEffect } from "react";

const CountryForm: React.FC<{ value: CountryForm; onChange: (value: CountryForm) => void; }> = ({ value, onChange }) => {
  const handleCountryName = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (value) {
      onChange({ ...value, name: event.target.value });
    }
  };

  const handleCountryRedirect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (value) {
      onChange({ ...value, redirectMessage: event.target.value });
    }
  };

  useEffect(() => {
    if (!value) {
      onChange({ name: "", redirectMessage: "" });
    }
  }, [value, onChange]);

  return (
      <div className="w-full space-y-3">
            <Input
              value={value?.name || ""}
              onChange={handleCountryName}
              className="h-[44px]"
              placeholder="Nome do país" 
            />
            <Input
              value={value?.redirectMessage || ""}
              onChange={handleCountryRedirect}
              className="h-[44px]"
              placeholder="Mensagem de redirect" 
            />
      </div>
  );
};

export {CountryForm};
