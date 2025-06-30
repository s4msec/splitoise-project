import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect } from "react";

interface ProjectFormValue {
  name: string;
  description: string;
}

const ProjectForm: React.FC<{ value: ProjectFormValue; onChange: (value: ProjectFormValue) => void; }> = ({ value, onChange }) => {
  const handleProjectName = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (value) {
      onChange({ ...value, name: event.target.value });
    }
  };

  const handleProjectDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
    <div>
      <div className="space-y-3">
        <Input
          value={value?.name || ""}
          onChange={handleProjectName}
          className="p-5 rounded-lg"
          placeholder="Nome do projeto"
        />
        <Textarea
          value={value?.description || ""}
          onChange={handleProjectDescription}
          className="p-5 rounded-lg"
          placeholder="Descrição do projeto"
        />
      </div>
    </div>
  );
};

export default ProjectForm;
