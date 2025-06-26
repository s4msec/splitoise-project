import { Module } from "@nestjs/common";
import { CalculatorService } from "./calculator.service";

@Module({
    providers: [CalculatorService],
    exports: [CalculatorService]
})

export class CalculatorModule {}
