import { Input } from "@/components/ui/input";
import { useEffect } from "react";

const CategoryForm: React.FC<{ value: CategoryForm; onChange: (value: CategoryForm) => void; }> = ({ value, onChange }) => {
  const handleCategoryName = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (value) {
      onChange({ ...value, name: event.target.value });
    }
  };

  const handleCategoryRedirect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (value) {
      onChange({ ...value, description: event.target.value });
    }
  };

  useEffect(() => {
    if (!value) {
      onChange({ name: "", description: "" });
    }
  }, [value, onChange]);

  return (
      <div className="w-full space-y-3">
            <Input
              value={value?.name || ""}
              onChange={handleCategoryName}
              className="h-[44px]"
              placeholder="Nome da categoria" 
            />
            <Input
              value={value?.description || ""}
              onChange={handleCategoryRedirect}
              className="h-[44px]"
              placeholder="Descrição" 
            />
      </div>
  );
};

export {CategoryForm};
