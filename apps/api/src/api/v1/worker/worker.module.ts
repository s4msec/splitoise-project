import { Module } from "@nestjs/common";
import { AnalystModule } from "../analyst/analyst.module";
import { WorkerService } from "./worker.service";
import { WorkerController } from "./worker.controller";

@Module({
    imports: [AnalystModule],
    controllers: [WorkerController],
    providers: [WorkerService]
})

export class WorkerModule {};
