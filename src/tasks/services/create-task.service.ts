import { Injectable } from "@nestjs/common";
import { Task } from "@prisma/client";

import { CreateTaskDto } from "../dtos/create-task.dto";
import { PrismaService } from "src/shared/services/prisma.service";

@Injectable()
export class CreateTaskService {
    constructor(private readonly prisma: PrismaService) {}

    public async execute(data: CreateTaskDto): Promise<Task> {
        const task =  await this.prisma.task.create({
            data: {
                title: data.title,
                content: data.content,
            }
        })

        return task
    }
}
