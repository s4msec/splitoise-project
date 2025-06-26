import { Module } from "@nestjs/common";
import { AnalystModule } from "../analyst/analyst.module";
import { WorkerService } from "./worker.service";

@Module({
    imports: [AnalystModule],
    providers: [WorkerService]
})

export class WorkerModule {};
