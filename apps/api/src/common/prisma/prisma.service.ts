// common/prisma/prisma.service.ts
import { Injectable, Logger, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Splitoise } from '@splitoise/db';

const globalForPrisma = globalThis as unknown as {
  splitoiseClient?: Splitoise.PrismaClient;
};

const splitoise = globalForPrisma.splitoiseClient ?? new Splitoise.PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.splitoiseClient = splitoise;
}

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);

  public readonly splitoise = splitoise;

  async onModuleInit() {
    this.logger.log('Connecting to databases...');
    await this.splitoise.$connect();
  }

  async onModuleDestroy() {
    this.logger.log('Disconnecting from databases...');
    await this.splitoise.$disconnect();
  }
}
