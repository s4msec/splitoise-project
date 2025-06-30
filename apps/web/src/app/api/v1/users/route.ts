// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hashPassword } from '@/utils/hash-password';

interface UserData {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'administrator';
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { name, password, role }: UserData = await request.json();

    // Validação dos campos obrigatórios
    if (!name || !password || !role) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios.' },
        { status: 400 }
      );
    }

    // Validação do campo 'role'
    const validRoles: Array<UserData['role']> = ['user', 'administrator'];
    if (!validRoles.includes(role)) {
      return NextResponse.json(
        { error: 'O campo "role" deve ser "user" ou "administrator".' },
        { status: 400 }
      );
    }

    // Hash da senha
    const secretKey = process.env.SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json(
        { error: 'Chave secreta não configurada no servidor.' },
        { status: 500 }
      );
    }
    const hashedPassword = hashPassword(password, secretKey);

    // Criação do novo usuário no banco de dados
    const newUser = await prisma.app.user.create({
      data: {
        name,
        password: hashedPassword,
        role,
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    return NextResponse.json(
      { error: 'Erro ao criar usuário.' },
      { status: 500 }
    );
  }
}
