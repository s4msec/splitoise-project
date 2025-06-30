import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { name, redirectMessage, icon }: Country = await request.json();

    // Validação dos campos obrigatórios
    if (!name || !redirectMessage || !icon) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios.' },
        { status: 400 }
      );
    }
  
    // Criação do novo usuário no banco de dados
    const country = await prisma.app.country.create({
      data: {
        name,
        redirectMessage: redirectMessage,
        icon,
      },
    });

    return NextResponse.json({ status: 'success', country }, { 
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
    const totalCount = await prisma.app.country.count();
    const totalPages = Math.ceil(totalCount / pageSize);

    // Ensure valid page number
    if (page < 1 || page > totalPages) {
      return NextResponse.json(
        { error: 'Página inválida.' },
        { status: 400 }
      );
    }

    // Fetch paginated data
    const countries = await prisma.app.country.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    return NextResponse.json({
      status: 'success',
      page,
      totalPages,
      totalCount,
      countries,
    });

  } catch (error) {
    console.error('Erro ao buscar países:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar países.' },
      { status: 500 }
    );
  }
}