import { Request, Response } from 'express';
import { TasksRepository } from '../../repositories/TasksRepository';
import { DeleteTaskUseCase } from './DeleteTaskUseCase';

export class DeleteTaskController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const tasksRepository = new TasksRepository();
    const deleteTaskUseCase = new DeleteTaskUseCase(tasksRepository);

    await deleteTaskUseCase.execute(id);

    return res.status(204).send();
  }
}