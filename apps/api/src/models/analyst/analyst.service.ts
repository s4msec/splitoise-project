import { Injectable } from "@nestjs/common";
import { prisma } from "@splitoise/db";

@Injectable()
export class AnalystService {
    getProjects() {
        return prisma.project.findFirst();
    }
}
