import { Controller, Get } from "@nestjs/common";
import { WorkerService } from "./worker.service";

@Controller('/api/v1/worker')
export class WorkerController {
    constructor( private readonly workerService: WorkerService) {}

    @Get('redistribute-percentages')
    async executePercentageRedistribution() {
        const execution = await this.workerService.redistributePercentagesPastTwoHours();
        if (execution) return "OK";
    }
}