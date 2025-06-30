import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { name, description }: Category = await request.json();

    // Validação dos campos obrigatórios
    if (!name || !description) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios.' },
        { status: 400 }
      );
    }
  
    // Criação do novo usuário no banco de dados
    const category = await prisma.app.category.create({
      data: {
        name,
        description: description
      },
    });

    return NextResponse.json({ status: 'success', category }, { 
      status: 201, 
      headers: { 'Content-Type': 'application/json' } 
   });

  } catch (error) {
    console.error('Erro ao criar país:', error);
    return NextResponse.json(
      { error: 'Erro ao criar país.' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    // Get page number from query parameters (default to 1 if not provided)
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const pageSize = 10;

    // Get total count of rows
    const totalCount = await prisma.app.category.count();
    const totalPages = Math.ceil(totalCount / pageSize);

    // Ensure valid page number
    if (page < 1 || page > totalPages) {
      return NextResponse.json(
        { error: 'Página inválida.' },
        { status: 400 }
      );
    }

    // Fetch paginated data
    const categories = await prisma.app.category.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    return NextResponse.json({
      status: 'success',
      page,
      totalPages,
      totalCount,
      categories,
    });

  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar categorias.' },
      { status: 500 }
    );
  }
}