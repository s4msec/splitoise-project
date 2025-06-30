import { Injectable } from "@nestjs/common";
import { AnalystService } from "../analyst/analyst.service";

@Injectable()
export class WorkerService {
    constructor(private readonly analystService: AnalystService) {}
    
    async redistributePercentagesPastTwoHours() {
        const analysisResult = await this.analystService.analyzeSplits();
        if (analysisResult) return true;
    }
}