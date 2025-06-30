"use client";

import { useEffect, useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { getProjectCountries, updateProjectCountries } from "@/actions/server-actions";

interface Project { id: number; name: string; }
interface Country { id: number; name: string; icon: string | null; }
interface CountrySetting { countryId: number; name: string; icon: string | null; pixelId: string; }

interface PixelSettingsClientProps {
  projects: Project[];
  countries: Country[];
}

const PixelSettingsClient: React.FC<PixelSettingsClientProps> = ({ projects, countries }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(projects.length > 0 ? projects[0] : null);
  const [settings, setSettings] = useState<CountrySetting[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!selectedProject) return;
    async function fetchSettings() {
      setIsFetching(true);
      try {
        const current = await getProjectCountries(selectedProject!.id);
        const merged = countries.map((c) => {
          const found = current.find((pc: any) => pc.countryId === c.id);
          return { countryId: c.id, name: c.name, icon: c.icon, pixelId: found ? String(found.pixelId) : "" };
        });
        setSettings(merged);
      } catch (err) {
        console.error("Error fetching settings:", err);
      } finally {
        setIsFetching(false);
      }
    }
    fetchSettings();
  }, [selectedProject, countries]);

  const handleInputChange = (id: number, value: string) => {
    value = value.replace(/\D/g, "");
    setSettings((prev) => prev.map((s) => (s.countryId === id ? { ...s, pixelId: value } : s)));
  };

  const handleSave = async () => {
    if (!selectedProject) return;
    setIsSaving(true);
    try {
      await updateProjectCountries(selectedProject!.id, settings);
    } catch (err) {
      console.error("Error updating project countries:", err);
    } finally {
      setIsSaving(false);
    }
  };

  if (projects.length === 0) {
    return <div className="p-5">Nenhum projeto disponível.</div>;
  }

  return (
    <div className="bg-neutral-200 dark:bg-neutral-800 p-5 h-full flex flex-col space-y-4">
      <div className="flex items-center space-x-3">
        <h1 className="text-lg font-bold">Pixels</h1>
        <Select
          value={selectedProject ? String(selectedProject.id) : undefined}
          onValueChange={(val) => {
            const proj = projects.find((p) => p.id === Number(val)) || null;
            setSelectedProject(proj);
          }}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Selecione o projeto" />
          </SelectTrigger>
          <SelectContent>
            {projects.map((p) => (
              <SelectItem key={p.id} value={String(p.id)}>{p.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="overflow-auto flex-1">
        {isFetching ? (
          <div className="p-4"><Loader className="animate-spin" /></div>
        ) : (
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead>País</TableHead>
                <TableHead>PixelId</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {settings.map((s) => (
                <TableRow key={s.countryId}>
                  <TableCell className="min-h-[60px]">
                    <span>{s.name}</span>
                  </TableCell>
                  <TableCell>
                    <Input
                      type="text"
                      inputMode="numeric"
                      value={s.pixelId}
                      onChange={(e) => handleInputChange(s.countryId, e.target.value)}
                      placeholder="PixelId"
                      className={`w-full min-h-[40px] transition-all duration-300 ${
                        s.pixelId && s.pixelId.length > 0 && s.pixelId.length < 14 ?
                          "border border-red-500 focus:border-red-500 focus:ring-red-500 text-red-500" : ""
                      }`}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
      <div className="flex justify-end">
        <Button onClick={handleSave} disabled={isSaving} className="w-[120px]">
          {isSaving ? <Loader className="animate-spin" /> : "Salvar"}
        </Button>
      </div>
    </div>
  );
};

export { PixelSettingsClient };
