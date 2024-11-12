import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { ListTasksService } from "./services/list-tasks.service";
import { CreateTaskService } from "./services/create-task.service";
import { CreateTaskDto } from "./dtos/create-task.dto";
import { Task } from "@prisma/client";
import { GetTaskService } from "./services/get-task.service";

@Controller('tasks')
export class TasksController {
    constructor(
        private readonly listTasksSerivce: ListTasksService,
        private readonly createTaskService: CreateTaskService,
        private readonly getTaskService: GetTaskService,
    ) {}

    @Get()
    public async list(): Promise<Task[]> {
        return await this.listTasksSerivce.execute()
    }

    @Get(':id')
    public async detail(@Param('id') id: string): Promise<Task> {
        return await this.getTaskService.execute(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    public async create(
        @Body() body: CreateTaskDto
    ): Promise<Task> {
        return await this.createTaskService.execute(body)
    }
}