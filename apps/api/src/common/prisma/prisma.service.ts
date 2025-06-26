import {
  Injectable,
  Logger,
  OnModuleInit,
  OnModuleDestroy,
} from '@nestjs/common';

import { Splitoise, Intended } from '@splitoise/db';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);

  public readonly splitoise = new Splitoise.PrismaClient();
  public readonly intended = new Intended.PrismaClient();

  async onModuleInit() {
    this.logger.log('Connecting to databases...');
    await this.splitoise.$connect();
    await this.intended.$connect();
  }

  async onModuleDestroy() {
    this.logger.log('Disconnecting from databases...');
    await this.splitoise.$disconnect();
    await this.intended.$disconnect();
  }
}
