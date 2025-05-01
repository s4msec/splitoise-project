import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

// Simplicity - Just a simple service to create and list users
@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(email: string, password: string) {
    const user = await this.prisma.user.create({
      data: { email, password },
    });

    return user;
  }

  async listUsers() {
    const users = await this.prisma.user.findMany();

    if (!users) {
      throw new NotFoundException(`No users found`);
    }

    return users;
  }
}
