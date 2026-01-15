import { Request, Response } from 'express';
import { TasksRepository } from '../../repositories/TasksRepository';
import { ToggleTaskCompletionUseCase } from './ToggleTaskCompletionUseCase';

export class ToggleTaskCompletionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { id: userId } = request.user;

    const tasksRepository = new TasksRepository();
    const toggleTaskCompletionUseCase = new ToggleTaskCompletionUseCase(tasksRepository);

    const task = await toggleTaskCompletionUseCase.execute(id, userId);

    return response.json(task);
  }
}