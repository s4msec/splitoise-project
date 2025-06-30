import { prisma } from "@/lib/prisma";
import { RenderLinks } from "@/components/dashboard/links/show-links/client/render-links";
import { RenderNavigationBar } from "@/components/dashboard/links/show-links/client/render-navigationbar";
import { notFound } from "next/navigation";

type LinkWithRelations = Awaited<ReturnType<typeof prisma.app.link.findMany>>[number];

type AdResult = { keyValue: string; adExchangeAverageECPM: number; hour: string };

const Links: React.FC<{ params: Promise<{ splitId: string }> }> = async ({ params }) => {
  const { splitId } = await params;

  const split = await prisma.app.split.findUnique({
    where: { id: parseInt(splitId, 10) },
  });
  if (!split) return notFound();

  const links: LinkWithRelations[] = await prisma.app.link.findMany({
    where: { splitId: parseInt(splitId, 10) },
    include: { linkType: true },
    orderBy: [
      { ecpm: "desc" },
      { id: "asc" },
    ],
  });

  const utmParameter = process.env.GOOGLE_UTM_PARAMETER || "utm_medium";
  const baseUrl = process.env.INTENDED_SERVICE_API || "http://localhost:3002";

  const utmValues: string[] = links
    .map((link: LinkWithRelations) => {
      try { return new URL(link.url).searchParams.get(utmParameter); } catch { return null; }
    })
    .filter((v): v is string => !!v);

  let results: AdResult[] = [];
  if (utmValues.length) {
    const res = await fetch(`${baseUrl}/api/v1/admanager/extract-ecpm`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ keyValues: utmValues, utmParameter }),
    });
    if (res.ok) {
      results = await res.json() as AdResult[];
    }
  }

  const ecpmMap: Record<string, number> = {};
  const hourMap: Record<string, string> = {};
  results.forEach((r: AdResult) => {
    const [, val] = r.keyValue.split("=");
    ecpmMap[val] = r.adExchangeAverageECPM;
    hourMap[val] = r.hour;
  });

  const linksWithECPM = links.map((link: LinkWithRelations) => {
    let ecpm = 0;
    let hour = "";
    try {
      const uv = new URL(link.url).searchParams.get(utmParameter) || "";
      ecpm = ecpmMap[uv] ?? 0;
      hour = hourMap[uv] ?? "";
    } catch {
      ecpm = 0;
    }
    return { ...link, ecpm, hour };
  });

  const isAnyDelayed = linksWithECPM.some((l) => {
    if (!l.hour || !l.updateTime) return false;
    const statusHour = parseInt(l.hour, 10);
    const d = new Date(l.updateTime);
    d.setHours(statusHour, 0, 0, 0);
    return (Date.now() - d.getTime()) / 36e5 > 2;
  });

  const sorted = [...linksWithECPM].sort((a, b) => (b.ecpm || 0) - (a.ecpm || 0));

  const withStatus = sorted.filter((l) => !!l.hour);
  const minHourLink = withStatus.sort(
    (a, b) => parseInt(a.hour, 10) - parseInt(b.hour, 10)
  )[0];
  const googleHour = minHourLink?.hour || "—";

  return (
    <div className="transition-opacity duration-500 opacity-100 h-full">
      <RenderNavigationBar
        redirectSlug={split.redirectSlug}
        isGoogleDelayed={isAnyDelayed}
        googleHour={googleHour}
      />
      <RenderLinks splitId={splitId} data={sorted} />
    </div>
  );
};

export default Links;
