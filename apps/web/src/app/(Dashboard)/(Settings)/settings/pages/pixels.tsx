import { prisma } from "@/lib/prisma";
import { PixelSettingsClient } from "@/components/settings/pages/pixels/pixel-settings-client";

const PixelSettings = async () => {
  const userId = 1; // Placeholder user id
  const projects = await prisma.app.project.findMany({
    where: { userId },
    select: { id: true, name: true },
    orderBy: { id: 'asc' },
  });

  const countries = await prisma.app.country.findMany({
    select: { id: true, name: true, icon: true },
    orderBy: { name: 'asc' },
  });

  return (
    <PixelSettingsClient projects={projects} countries={countries} />
  );
};

export { PixelSettings };
