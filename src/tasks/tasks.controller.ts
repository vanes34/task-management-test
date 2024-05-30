import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TasksRepository } from './tasks.repository';

@Controller('tasks')
export class TasksController {
  constructor(
    @InjectRepository(TasksRepository) private tasksService: TasksService,
  ) {}
  //   @Get()
  //   getTasks(@Query() filterDto: GetTasksFilter): Task[] {
  //     //if we have any filters defined , call tasks Service.Filters
  //     if (Object.keys(filterDto).length) {
  //       return this.tasksService.getTasksWithFilter(filterDto);
  //     } else {
  //       return this.tasksService.getAllTasks();
  //     }
  //   }
  @Get('/:id')
  getTaskById(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  //   @Delete('/:id')
  //   deleteTaskById(@Param('id') id: string) {
  //     return this.tasksService.deleteTaskById(id);
  //   }

  //   @Patch('/:id/status')
  //   updateTaskStatus(
  //     @Param('id') id: string,
  //     @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  //   ): Task {
  //     const { status } = updateTaskStatusDto;
  //     return this.tasksService.updateTaskStatus(id, status);
  //   }
  // }
}
