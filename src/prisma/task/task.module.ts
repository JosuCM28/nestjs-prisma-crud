import { Module } from "@nestjs/common";
import { TaskController } from "./task.controller";
import { TaskService } from "./task.service";
import { Prisma } from "generated/prisma";
import { PrismaModule } from "../prisma.module";

 
 @Module({
     controllers: [TaskController],
     providers: [TaskService],
     imports: [PrismaModule]
 })
 export class TaskModule {}