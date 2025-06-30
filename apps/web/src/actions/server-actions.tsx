"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

import { prisma } from "@/lib/prisma";


var baseUrl: string = process.env.NODE_ENV === "production" ? `${process.env.NEXT_PROTOCOL}://${process.env.NEXT_HOST}${process.env.NEXT_PORT === "80" ? `` : `:${process.env.NEXT_PORT}`}` : `http://localhost:3000`;

type CategoryItem = Awaited<ReturnType<typeof prisma.app.category.findMany>>[number];
type CountryItem = Awaited<ReturnType<typeof prisma.app.country.findMany>>[number];
type LinkTypeItem = Awaited<ReturnType<typeof prisma.app.linkType.findMany>>[number];

export async function uploadProjectIcon(formData: FormData): Promise<string | null> {
  try {
    const response = await fetch(`${baseUrl}/api/v1/upload`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Upload failed");

    return data.file;
  } catch (error) {
    console.error("Image upload error:", error);
    return null;
  }
}

export async function uploadCountryIcon(formData: FormData): Promise<string | null> {
  try {
    const response = await fetch(`${baseUrl}/api/v1/upload?directory=locales`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Upload failed");

    return data.file;
  } catch (error) {
    console.error("Image upload error:", error);
    return null;
  }
}

export async function createProject(userId: number, name: string, description: string, icon: string) {
  try {
    const response = await fetch(`${baseUrl}/api/v1/projects`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, name, description, icon }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Project creation failed");

    revalidatePath("/projects"); // Refresh project list
    return data.project;
  } catch (error) {
    console.error("Project creation error:", error);
    return null;
  }
}

export async function deleteProject(projectId: number) {
  try {
    // Exclui o projeto; certifique-se que o cascade está configurado no seu schema Prisma
    const deletedProject = await prisma.app.project.delete({
      where: { id: projectId },
    });
    revalidatePath("/projects");
    return deletedProject;
  } catch (error) {
    console.error("Error deleting project:", error);
    throw error;
  }
}

export async function updateProjectIcon(projectId: number, icon: string) {
  try {
    const updated = await prisma.app.project.update({
      where: { id: projectId },
      data: { icon },
    });
    revalidatePath("/projects");
    return updated;
  } catch (error) {
    console.error("Error updating project icon:", error);
    return null;
  }
}

export async function createCountry(name: string, redirectMessage: string, icon: string) {
  try {
    const response = await fetch(`${baseUrl}/api/v1/countries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, redirectMessage, icon }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Country creation failed");
    revalidatePath("/settings"); // Refresh Settings

    return data.country;
  } catch (error) {
    console.error("Country creation error:", error);
    return null;
  }
}

export async function createCategory(name: string, description: string) {
  try {
    const response = await fetch(`${baseUrl}/api/v1/categories`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Category creation failed");
    revalidatePath("/settings"); // Refresh Settings

    return data.category;
  } catch (error) {
    console.error("Category creation error:", error);
    return null;
  }
}

export async function createSplitter(projectId: string, categoryId: string, countryId: string) {
  try {
    const response = await fetch(`${baseUrl}/api/v1/splitters`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projectId, categoryId, countryId }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Splitter creation failed");
    revalidatePath("/splitters");

    return data.splitter;
  } catch (error) {
    console.error("Splitter creation error:", error);
    return null;
  }
}

export async function createSplit(splitterId: number, redirectSlug: string) {
  try {
    const response = await fetch(`${baseUrl}/api/v1/splits`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ splitterId, redirectSlug }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Split creation failed");
    revalidatePath("/splits");

    return data.split;
  } catch (error) {
    console.error("Split creation error:", error);
    return null;
  }
}

export async function updateSplit(
  currentRedirectSlug: string,
  newRedirectSlug: string
) {
  try {
    const response = await fetch(`${baseUrl}/api/v1/splits`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ currentRedirectSlug, newRedirectSlug }),
    });

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const errorText = await response.text();
      throw new Error("Response is not JSON: " + errorText);
    }
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Split update failed");
    }

    revalidatePath("/splits");
    return data.split;
  } catch (error) {
    console.error("Error updating split:", error);
    return null;
  }
}

export async function createLinks(
  links: Array<{
    splitId: number;
    hidden?: boolean;
    url: string;
    type: number;
    prob?: number;
    ecpm?: number;
  }>
) {
  try {
    const response = await fetch(`${baseUrl}/api/v1/links`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // Pass the array of link objects under a key, for example "links"
      body: JSON.stringify({ links }),
      cache: "no-store", // Ensure no caching for data modification
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Link creation failed");
    }

    // Assuming your API returns the created links in data.links (an array)
    revalidatePath("/links");
    return data.links;
  } catch (error) {
    console.error("Error in createLinks action:", error);
    throw error;
  }
}

export async function updateLinks(
  updates: Array<{
    id: number;
    splitId?: number;
    url?: string;
    type?: number;
    prob?: number;
    ecpm?: number;
    hidden?: boolean;
  }>
) {
  try {
    const response = await fetch(`${baseUrl}/api/v1/links`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
      cache: "no-store",
    });
    
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Link update failed");
    }
    
    return data.links;
  } catch (error) {
    console.error("Error in updateLinksAction:", error);
    throw error;
  }
}

export async function deleteLinks(
  ids: number[]
) {
  try {
    const response = await fetch(`${baseUrl}/api/v1/links`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids }),
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Link(s) deletion failed");
    }
    revalidatePath("/links");
    return data.links;
  } catch (error) {
    console.error("Error in deleteLinks action:", error);
    throw error;
  }
}

export async function setCategoryPagination(page: number) {
  (await cookies()).set("categoryPage", String(page));
}

export async function setCountryPagination(page: number) {
  (await cookies()).set("countryPage", String(page));
}

export async function getCategories(): Promise<{ value: string; label: string }[]> {
  try {
    // tipar explicitamente o array de categorias
    const categories: CategoryItem[] = await prisma.app.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    // disparar revalidação
    revalidatePath("/projects");

    // agora id e name têm tipos corretos (number e string)
    return categories.map(({ id, name }) => ({
      value: id.toString(),
      label: name,
    }));
  } catch (error) {
    console.error("Category retrieving error:", error);
    return [];
  }
}

export async function getCountries(projectId: number): Promise<{ value: string; label: string }[]> {
  if (!projectId) return [];

  try {
    const countries: CountryItem[] = await prisma.app.country.findMany({
      select: { id: true, name: true },
    });
    revalidatePath("/projects");
    return countries.map(({ id, name }) => ({
      value: id.toString(),
      label: name,
    }));
  } catch (error) {
    console.error("Countries retrieving error:", error);
    return [];
  }
}

export async function getLinkTypes(): Promise<{ value: string; label: string }[]> {
  try {
    const linkTypes: LinkTypeItem[] = await prisma.app.linkType.findMany({
      select: { id: true, name: true },
    });
    revalidatePath("/links");
    return linkTypes.map(({ id, name }) => ({
      value: id.toString(),
      label: name,
    }));
  } catch (error) {
    console.error("Link types retrieving error:", error);
    return [];
  }
}

export async function getProjectCountries(projectId: number) {
  try {
    const response = await fetch(`${baseUrl}/api/v1/projects/project-countries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projectId }),
      cache: "no-store",
    });
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Response is not JSON");
    }
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Falha ao recuperar project-countries");
    }
    return data.projectCountries;
  } catch (error) {
    console.error("Error retrieving project countries:", error);
    return [];
  }
}

/**
 * Atualiza (ou insere) os registros de ProjectCountries para um projeto.
 * Recebe o projectId e um array de configurações com countryId e pixelId.
*/
export async function updateProjectCountries(
  projectId: number,
  settings: Array<{ countryId: number; pixelId: string }>
) {
  try {
    const response = await fetch(`${baseUrl}/api/v1/projects/project-countries`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projectId, settings }),
      cache: "no-store",
    });

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Response is not JSON");
    }

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Falha ao atualizar project-countries");
    }

    revalidatePath("/projects");
    return data.status === "success";
  } catch (error) {
    console.error("Error updating project countries:", error);
    return false;
  }
}
