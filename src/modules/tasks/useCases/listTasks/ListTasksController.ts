import { Request, Response } from 'express';
import { TasksRepository } from '../../repositories/TasksRepository';
import { ListTasksUseCase } from './ListTasksUseCase';

export class ListTasksController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: userId } = request.user;

    const tasksRepository = new TasksRepository();
    const listTasksUseCase = new ListTasksUseCase(tasksRepository);

    const tasks = await listTasksUseCase.execute(userId);

    return response.json(tasks);
  }
}