import { Request, Response } from 'express';
import { DeleteTaskUseCase } from './DeleteTaskUseCase';
import { TasksRepository } from '../../repositories/TasksRepository';

export class DeleteTaskController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { id: userId } = request.user;

    const tasksRepository = new TasksRepository();
    const deleteTaskUseCase = new DeleteTaskUseCase(tasksRepository);

    await deleteTaskUseCase.execute(id, userId);

    return response.status(204).send();
  }
}