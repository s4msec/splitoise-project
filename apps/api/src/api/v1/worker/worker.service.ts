import { Injectable, OnModuleInit } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";

import { AnalystService } from "../analyst/analyst.service";

@Injectable()
export class WorkerService implements OnModuleInit {
    constructor(private readonly analystService: AnalystService) {}
    async onModuleInit() {
       await this.analystService.analyzeSplits();
    }

    @Cron('0 */2 * * *')
    async redistributePercentagesPastTwoHours() {
        await this.analystService.analyzeSplits();
    }
}