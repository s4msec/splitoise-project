import { Module } from "@nestjs/common";
import { AnalystService } from "./analyst.service";
import { CalculatorService } from "../calculator/calculator.service";

@Module({
    providers: [AnalystService, CalculatorService],
    exports: [AnalystService]
})

export class AnalystModule {}