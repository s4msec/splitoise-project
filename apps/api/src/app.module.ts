import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaModule } from '@/common/prisma/prisma.module';
import { WorkerModule } from '@/api';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    PrismaModule,
    WorkerModule
  ]
})

export class AppModule {}
