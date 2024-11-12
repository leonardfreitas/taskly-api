import { Module } from "@nestjs/common";
import { TasksController } from "./tasks.controller";
import { ListTasksService } from "./services/list-tasks.service";
import { CreateTaskService } from "./services/create-task.service";
import { PrismaService } from "src/shared/services/prisma.service";
import { GetTaskService } from "./services/get-task.service";

@Module({
    controllers: [TasksController],
    providers: [
        PrismaService,
        ListTasksService, 
        CreateTaskService,
        GetTaskService,
    ]
})
export class TasksModule {}