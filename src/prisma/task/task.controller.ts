import { Controller, Injectable, Get, Post, Body, Patch, Param, Delete, Put, NotFoundException } from "@nestjs/common";
import { TaskService } from "./task.service";
import type { Task } from "@prisma/client";


@Controller('tasks')
export class TaskController {

    constructor(private readonly taskService: TaskService) { }

    @Get()
    async getAllTasks() {
        return this.taskService.getAllTasks();
    }

    @Post()
    async createTask(@Body() data: Task) {
        return this.taskService.createTask(data);
    }

    @Get(':id')
    async getTaskById(@Param('id') id: number) {
        const taskFound = await this.taskService.getTaskById(Number(id));
        if (!taskFound) {
            throw new NotFoundException('Task not found');
        }
        return taskFound;
    }

    @Put(':id')
    async updateTask(@Param('id') id: number, @Body() data: Task) {
        return this.taskService.updateTask(Number(id), data);
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: number) {
        try{
            return await this.taskService.deleteTask(Number(id));
        }
        catch{
            throw new NotFoundException('Task not found');
        }
    }

}