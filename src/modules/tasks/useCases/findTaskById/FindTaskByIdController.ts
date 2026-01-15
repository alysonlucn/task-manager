import { Request, Response } from 'express';
import { TasksRepository } from '../../repositories/TasksRepository';
import { FindTaskByIdUseCase } from './FindTaskByIdUseCase';

export class FindTaskByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { id: userId } = request.user;

    const tasksRepository = new TasksRepository();
    const findTaskByIdUseCase = new FindTaskByIdUseCase(tasksRepository);

    const task = await findTaskByIdUseCase.execute(id, userId);

    return response.json(task);
  }
}