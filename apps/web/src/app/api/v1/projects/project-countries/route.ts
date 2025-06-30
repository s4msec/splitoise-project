import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * POST: Retrieve ProjectCountries for a project.
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { projectId } = (await request.json()) as { projectId: number };

    if (!projectId) {
      return NextResponse.json(
        { error: "projectId is required" },
        { status: 400 }
      );
    }

    const projectCountries = await prisma.app.projectCountries.findMany({
      where: { projectId },
      select: { countryId: true, pixelId: true },
    });

    return NextResponse.json({ projectCountries }, { status: 200 });
  } catch (error) {
    console.error("Error retrieving project countries:", error);
    return NextResponse.json(
      { error: "Erro interno no servidor ao recuperar ProjectCountries." },
      { status: 500 }
    );
  }
}

/**
 * PUT: Upsert ProjectCountries records for a project.
 */
export async function PUT(request: NextRequest): Promise<NextResponse> {
  try {
  const { projectId, settings } = await request.json() as {
      projectId: number;
      settings: Array<{ countryId: number; pixelId: string }>;
    };

    for (const setting of settings) {
      const { countryId, pixelId } = setting;

      const existing = await prisma.app.projectCountries.findFirst({
        where: { projectId, countryId },
      });

      if (existing) {
        await prisma.app.projectCountries.update({
          where: { id: existing.id },
          data: {
            pixelId: String(pixelId).trim(),
            capiToken: existing.capiToken ?? "",
          },
        });
      } else if (pixelId.trim() !== "") {
        await prisma.app.projectCountries.create({
          data: {
            projectId,
            countryId,
            pixelId: String(pixelId).trim(),
            capiToken: "",
          },
        });
      }
    }

    return NextResponse.json({ status: "success" }, { status: 200 });
  } catch (error) {
    console.error("Error updating project countries:", error);
    return NextResponse.json(
      { error: "Erro interno no servidor ao atualizar ProjectCountries." },
      { status: 500 }
    );
  }
}
