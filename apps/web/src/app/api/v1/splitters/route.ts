import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { customAlphabet } from 'nanoid';

const generateUuid = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', 5);

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    // Obtém os parâmetros da URL
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    // Valida se o id foi informado
    if (!id) {
      return NextResponse.json(
        { error: 'Informe o id do splitter.' },
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Busca o splitter usando o id (uuid)
    const splitter = await prisma.app.splitter.findUnique({
      where: { uuid: id },
      select: {
        uuid: true,
        projectId: true,
        countryId: true,
        categoryId: true,
      },
    });

    // Caso o splitter não seja encontrado
    if (!splitter) {
      return NextResponse.json(
        { error: 'Splitter não encontrado.' },
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Retorna os dados do splitter
    return NextResponse.json(
      { splitter },
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Erro ao buscar splitter:', error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: 'Erro interno ao buscar splitter.', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Parsing do corpo da requisição com tipagem adequada
    const { projectId, countryId, categoryId }: { 
      projectId: string; 
      countryId: string; 
      categoryId: string; 
    } = await request.json();

    // Validação dos campos obrigatórios
    if (!projectId || !categoryId || !countryId) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios.' },
        { status: 400 }
      );
    }

    // Converter os IDs para número de forma segura
    const splitterProjectId = Number(projectId);
    const splitterCountryId = Number(countryId);
    const splitterCategoryId = Number(categoryId);

    if (isNaN(splitterProjectId) || isNaN(splitterCountryId) || isNaN(splitterCategoryId)) {
      return NextResponse.json(
        { error: 'IDs devem ser números válidos.' },
        { status: 400 }
      );
    }

    // Verifica se o projeto existe
    const projectExists = await prisma.app.project.findUnique({
      where: { id: splitterProjectId },
    });
    if (!projectExists) {
      return NextResponse.json(
        { error: 'Projeto não encontrado.' },
        { status: 404 }
      );
    }

    // Verifica se o país existe
    const countryExists = await prisma.app.country.findUnique({
      where: { id: splitterCountryId },
    });
    if (!countryExists) {
      return NextResponse.json(
        { error: 'País não encontrado.' },
        { status: 404 }
      );
    }

    // Verifica se a categoria existe
    const categoryExists = await prisma.app.category.findUnique({
      where: { id: splitterCategoryId },
    });
    if (!categoryExists) {
      return NextResponse.json(
        { error: 'Categoria não encontrada.' },
        { status: 404 }
      );
    }

    const uuid = generateUuid();

    const splitter = await prisma.app.splitter.create({
      data: {
        uuid: uuid,
        projectId: splitterProjectId,
        countryId: splitterCountryId,
        categoryId: splitterCategoryId,
      },
    });

    return NextResponse.json(
      { status: 'success', splitter }, 
      { 
        status: 201, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Erro ao criar Splitter:', error);
    return NextResponse.json(
      { error: 'Erro interno ao criar Splitter.' },
      { status: 500 }
    );
  }
}
