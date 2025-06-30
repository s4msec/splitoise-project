import { Splitoise } from "@splitoise/db";

declare global {
  var prismaApp: Splitoise.PrismaClient | undefined;
}

const prismaApp = global.prismaApp || new Splitoise.PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prismaApp = prismaApp;
}

export const prisma = { app: prismaApp };
