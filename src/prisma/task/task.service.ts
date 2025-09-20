import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import type { Task } from "@prisma/client";
import { get } from "http";

@Injectable()
export class TaskService {

    constructor(private prisma: PrismaService) { }

    async getAllTasks(): Promise<Task[]> {
        return this.prisma.task.findMany();
    }

    async getTaskById(id: number): Promise<Task | null> {
        return this.prisma.task.findUnique({
            where: {
                id: id
            }
        });
    }
    async createTask(data: Task): Promise<Task> {
        return this.prisma.task.create({
            data
        });
    }
    async updateTask(id: number, data: Task): Promise<Task> {
        return this.prisma.task.update({
            where: {
                id: id
            },
            data
        });
    }
    async deleteTask(id: number): Promise<Task> {
        return this.prisma.task.delete({
            where: {
                id
            }
        });
    }
}