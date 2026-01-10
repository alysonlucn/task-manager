import { Request, Response } from 'express';
import { TasksRepository } from '../../repositories/TasksRepository';
import { CreateTaskUseCase } from './CreateTaskUseCase';

export class CreateTaskController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { title, description } = req.body;

      const tasksRepository = new TasksRepository();
      const createTaskUseCase = new CreateTaskUseCase(tasksRepository);

      const task = await createTaskUseCase.execute({ title, description });

      return res.status(201).json(task);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }

      return res.status(500).json({ message: 'Unexpected error' });
    }
  }
}