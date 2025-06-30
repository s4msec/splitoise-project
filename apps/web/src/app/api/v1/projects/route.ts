import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { customAlphabet } from 'nanoid';

const generateUuid = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', 22);

export async function GET(request: NextRequest) {
  try {
    // Obter os parâmetros da URL
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    const name = url.searchParams.get('name');

    // Verifica se ao menos um parâmetro foi informado
    if (!id && !name) {
      return NextResponse.json(
        { error: 'Informe o id ou o nome do projeto.' },
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Busca o projeto de acordo com o parâmetro informado
    let project;
    if (id) {
      project = await prisma.app.project.findUnique({
        where: { uuid: id },
        select: { id: true, uuid: true, name: true },
      });
    } else if (name) {
      project = await prisma.app.project.findFirst({
        where: { name: name },
        select: { id: true, uuid: true, name: true },
      });
    }

    // Caso o projeto não seja encontrado
    if (!project) {
      return NextResponse.json(
        { error: 'Projeto não encontrado.' },
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Retorna os dados do projeto (id e nome)
    return NextResponse.json(
      { project },
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Erro ao buscar projeto:', error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: 'Erro ao buscar projeto.', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, name, description, icon } = body;

    // Validate input fields
    if (!userId || !name || !icon) {
      return NextResponse.json(
        { error: 'Missing required fields: userId, name, or icon' },
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check if the user exists
    const userExists = await prisma.app.user.findUnique({
      where: { id: userId },
    });

    if (!userExists) {
      return NextResponse.json(
        { error: 'User does not exist' },
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Generate a random UUID for the project
    const uuid = generateUuid();

    // Create the project
    const project = await prisma.app.project.create({
      data: {
        uuid,
        userId,
        name,
        description: description,
        icon,
      },
    });

    return NextResponse.json({ status: 'success', project }, { 
      status: 201, 
      headers: { 'Content-Type': 'application/json' } 
    });
  } catch (error) {
    console.error('Error creating project:', error instanceof Error ? error.message : error);

    return NextResponse.json(
      { 
        error: 'Failed to create project', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
