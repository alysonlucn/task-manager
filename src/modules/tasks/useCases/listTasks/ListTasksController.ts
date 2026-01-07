import { Request, Response } from 'express';
import { ListTasksUseCase } from './ListTasksUseCase';
import { TasksRepository } from '../../repositories/TasksRepository';

export class ListTasksController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = new ListTasksUseCase(
      new TasksRepository()
    );

    const tasks = await useCase.execute();

    return res.json(tasks);
  }
}
