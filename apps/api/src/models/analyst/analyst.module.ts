import { Module } from "@nestjs/common";
import { AnalystService } from "./analyst.service";

@Module({
    providers: [AnalystService],
    exports: [AnalystService]
})

export class AnalystModule {}