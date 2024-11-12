import { Injectable } from "@nestjs/common";
import { Task } from "@prisma/client";
import { PrismaService } from "src/shared/services/prisma.service";

@Injectable()
export class ListTasksService {
    constructor(private readonly prisma: PrismaService) {}

    public async execute(): Promise<Task[]> {
        const tasks = await this.prisma.task.findMany()

        return tasks
    }
}