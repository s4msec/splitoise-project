"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const analyst_module_1 = require("./models/analyst/analyst.module");
const analyst_service_1 = require("./models/analyst/analyst.service");
let AppModule = class AppModule {
    analystService;
    constructor(analystService) {
        this.analystService = analystService;
    }
    async onApplicationBootstrap() {
        console.log(await this.analystService.getProjects());
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            analyst_module_1.AnalystModule
        ],
    }),
    __metadata("design:paramtypes", [analyst_service_1.AnalystService])
], AppModule);
//# sourceMappingURL=app.module.js.map