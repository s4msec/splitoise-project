import { Module } from "@nestjs/common";
import { AnalystService } from "./analyst.service";
import { CalculatorService } from "../calculator/calculator.service";
import { HttpModule } from "@nestjs/axios";

@Module({
    imports: [HttpModule],
    providers: [AnalystService, CalculatorService],
    exports: [AnalystService]
})

export class AnalystModule {}