import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Parsing do corpo da requisição com tipagem adequada
    const { redirectSlug, splitterId }: { 
      redirectSlug?: string; 
      splitterId: string; 
    } = await request.json();

    // Validação: splitterId é obrigatório
    if (!splitterId) {
      return NextResponse.json(
        { error: 'O campo "splitterId" é obrigatório.' },
        { status: 400 }
      );
    }

    // Converter splitterId para número de forma segura
    const splitterIdNumber = Number(splitterId);
    if (isNaN(splitterIdNumber)) {
      return NextResponse.json(
        { error: 'splitterId deve ser um número válido.' },
        { status: 400 }
      );
    }

    // Verifica se o splitter existe
    const splitterExists = await prisma.app.splitter.findUnique({
      where: { id: splitterIdNumber },
    });
    if (!splitterExists) {
      return NextResponse.json(
        { error: 'Splitter não encontrado.' },
        { status: 404 }
      );
    }

    // Normaliza o redirectSlug, se fornecido
    // Remove espaços desnecessários, converte para minúsculo e substitui espaços por hífens.
    const normalizedSlug = redirectSlug
      ? redirectSlug.trim().toLowerCase().replace(/\s+/g, '-')
      : null;

    // Se não for fornecido um redirectSlug, retornamos erro (ou você pode optar por gerar um slug padrão)
    if (!normalizedSlug) {
      return NextResponse.json(
        { error: 'O campo "redirectSlug" é obrigatório.' },
        { status: 400 }
      );
    }

    // Verifica se já existe um Split com esse redirectSlug (pois é único)
    const splitExists = await prisma.app.split.findUnique({
      where: { redirectSlug: normalizedSlug },
    });
    if (splitExists) {
      return NextResponse.json(
        { error: 'redirectSlug já existe.' },
        { status: 409 }
      );
    }

    // Cria o registro de Split
    const split = await prisma.app.split.create({
      data: {
        redirectSlug: normalizedSlug,
        splitterId: splitterIdNumber,
        // O campo Link é um array, que pode ser deixado vazio no momento da criação.
      },
    });

    return NextResponse.json(
      { status: 'success', split },
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Erro ao criar Split:', error);
    return NextResponse.json(
      { error: 'Erro interno no servidor ao criar Split.' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest): Promise<NextResponse> {
  try {
    // Extract parameters from the request body
    const { currentRedirectSlug, newRedirectSlug } = await request.json() as { 
      currentRedirectSlug?: any; 
      newRedirectSlug?: any; 
    };

    if (!currentRedirectSlug || !newRedirectSlug) {
      return NextResponse.json(
        { error: 'Os campos "currentRedirectSlug" e "newRedirectSlug" são obrigatórios.' },
        { status: 400 }
      );
    }

    // Normalize function that casts the slug to string
    const normalize = (slug: any): string =>
      String(slug).trim().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');

    const normalizedCurrent = normalize(currentRedirectSlug);
    const normalizedNew = normalize(newRedirectSlug);

    // Find the split using the current normalized redirectSlug.
    const split = await prisma.app.split.findUnique({
      where: { redirectSlug: normalizedCurrent },
    });

    if (!split) {
      return NextResponse.json(
        { error: 'Split com o redirectSlug atual não encontrado.' },
        { status: 404 }
      );
    }

    // If the new slug is the same as the current one, do nothing.
    if (normalizedCurrent === normalizedNew) {
      return NextResponse.json(
        { status: 'unchanged', split },
        { status: 200 }
      );
    }

    // Check if another split already uses the new redirectSlug.
    const exists = await prisma.app.split.findUnique({
      where: { redirectSlug: normalizedNew },
    });
    if (exists) {
      return NextResponse.json(
        { error: 'redirectSlug já existe.' },
        { status: 409 }
      );
    }
    
    // Atualiza somente o campo redirectSlug usando o id do split encontrado.
    // O id permanece inalterado, preservando a ordem.
    const updatedSplit = await prisma.app.split.update({
      where: { id: split.id },
      data: { redirectSlug: normalizedNew },
    });
    return NextResponse.json(
      { status: 'success', split: updatedSplit },
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Erro ao atualizar Split:', error);
    return NextResponse.json(
      { error: 'Erro interno no servidor ao atualizar Split.' },
      { status: 500 }
    );
  }
}