import { OnApplicationBootstrap } from '@nestjs/common';
import { AnalystService } from './models/analyst/analyst.service';
export declare class AppModule implements OnApplicationBootstrap {
    private readonly analystService;
    constructor(analystService: AnalystService);
    onApplicationBootstrap(): Promise<void>;
}
