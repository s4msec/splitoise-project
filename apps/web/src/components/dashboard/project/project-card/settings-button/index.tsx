"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader } from "lucide-react";
import { getProjectCountries, updateProjectCountries } from "@/actions/server-actions";

interface Country {
  id: number;
  name: string;
  icon: string | null;
}

interface CountrySetting {
  countryId: number;
  name: string;
  icon: string | null;
  pixelId: string;
}

interface SettingsModalProps {
  projectId: number;
  open: boolean;
  onClose: () => void;
}

export function SettingsButtonModal({ projectId, open, onClose }: SettingsModalProps) {
  const [settings, setSettings] = React.useState<CountrySetting[]>([]);
  const [isFetching, setIsFetching] = React.useState<boolean>(true);
  const [isSaving, setIsSaving] = React.useState<boolean>(false);
  const [internalOpen, setInternalOpen] = React.useState(open);

  React.useEffect(() => {
    setInternalOpen(open);
  }, [open]);

  React.useEffect(() => {
    async function fetchSettings() {
      try {
        const resCountries = await fetch("/api/v1/countries");
        const data = await resCountries.json();
        const countries: Country[] = data.countries ?? [];

        const currentSettings = await getProjectCountries(projectId);
        const merged = countries.map((country) => {
          const setting = currentSettings.find((s: any) => s.countryId === country.id);
          return {
            countryId: country.id,
            name: country.name,
            icon: country.icon,
            pixelId: setting ? String(setting.pixelId) : "",
          };
        });
        setSettings(merged);
      } catch (error) {
        console.error("Error fetching country settings:", error);
      } finally {
        setIsFetching(false);
      }
    }
    if (open) {
      fetchSettings();
    }
  }, [projectId, open]);

  const handleInputChange = (
    countryId: number,
    value: string
  ) => {
    value = value.replace(/\D/g, "");
    setSettings((prev) =>
      prev.map((s) => (s.countryId === countryId ? { ...s, pixelId: value } : s))
    );
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const success = await updateProjectCountries(projectId, settings);
      if (success) {
        setInternalOpen(false);
        setTimeout(() => {
          onClose();
          setIsSaving(false);
        }, 800);
      } else {
        setIsSaving(false);
      }
    } catch (error) {
      console.error("Error updating project countries:", error);
      setIsSaving(false);
    }
  };

  return (
    <Dialog
      open={internalOpen}
      onOpenChange={(openState) => {
        setInternalOpen(openState);
        if (!openState) {
          setTimeout(() => onClose(), 300);
        }
      }}
    >
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Configurar Países do Projeto</DialogTitle>
          <DialogDescription>
            Para cada país, insira o PixelId. Este valor é específico para o projeto.
          </DialogDescription>
        </DialogHeader>
        <div className="overflow-auto max-h-[60vh]">
          {isFetching ? (
            <div className="space-y-2 p-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center space-x-4 animate-pulse">
                  <div className="w-8 h-8 bg-neutral-300 dark:bg-neutral-700 rounded-full" />
                  <div className="flex-1">
                    <div className="h-4 bg-neutral-300 dark:bg-neutral-700 rounded mb-2" />
                  </div>
                  <div className="w-24 h-8 bg-neutral-300 dark:bg-neutral-700 rounded" />
                  <div className="w-32 h-8 bg-neutral-300 dark:bg-neutral-700 rounded" />
                </div>
              ))}
            </div>
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
                    <TableCell className="min-h-[80px]">
                      <span>{s.name}</span>
                    </TableCell>
                    <TableCell>
                      <Input
                        type="text"
                        inputMode="numeric"
                        value={s.pixelId}
                        onChange={(e) =>
                          handleInputChange(s.countryId, e.target.value)
                        }
                        placeholder="PixelId"
                        className={`w-full min-h-[60px] transition-all duration-300 ${
                          s.pixelId && s.pixelId.length > 0 && s.pixelId.length < 14
                            ? "border border-red-500 focus:border-red-500 focus:ring-red-500 text-red-500"
                            : ""
                        }`}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setInternalOpen(false)} disabled={isSaving}>
            Cancelar
          </Button>
          <Button onClick={handleSave} disabled={isSaving}>
            {isSaving ? <Loader className="animate-spin" /> : "Salvar Alterações"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
