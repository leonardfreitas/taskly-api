import { Injectable } from "@nestjs/common";
import { Task } from "@prisma/client";
import { PrismaService } from "src/shared/services/prisma.service";

@Injectable()
export class GetTaskService {
    constructor(private readonly prisma: PrismaService) {}

    public async execute(id: string): Promise<Task> {
        const task = await this.prisma.task.findUnique({
            where: { id }
        })

        return task
    }
}