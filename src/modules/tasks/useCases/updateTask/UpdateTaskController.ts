import { Request, Response } from 'express';
import { TasksRepository } from '../../repositories/TasksRepository';
import { UpdateTaskUseCase } from './UpdateTaskUseCase';

export class UpdateTaskController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { title, description } = req.body;

    const tasksRepository = new TasksRepository();
    const updateTaskUseCase = new UpdateTaskUseCase(tasksRepository);

    const task = await updateTaskUseCase.execute({
      id,
      title,
      description,
    });

    return res.json(task);
  }
}