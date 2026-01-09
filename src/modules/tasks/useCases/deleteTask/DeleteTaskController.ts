import { Request, Response } from 'express';
import { TasksRepository } from '../../repositories/TasksRepository';
import { DeleteTaskUseCase } from './DeleteTaskUseCase';

export class DeleteTaskController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const tasksRepository = new TasksRepository();
    const deleteTaskUseCase = new DeleteTaskUseCase(tasksRepository);

    await deleteTaskUseCase.execute(id);

    return response.status(204).send();
  }
}