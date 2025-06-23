import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { AnalystModule } from './models/analyst/analyst.module';
import { AnalystService } from './models/analyst/analyst.service';

@Module({
  imports: [
    AnalystModule
  ],
})

export class AppModule implements OnApplicationBootstrap {
  constructor(private readonly analystService: AnalystService) {}

  async onApplicationBootstrap() {
    console.log(await this.analystService.getProjects());
  }
}
