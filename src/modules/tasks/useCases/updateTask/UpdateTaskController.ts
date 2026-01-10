import { Request, Response } from 'express';
import { TasksRepository } from '../../repositories/TasksRepository';
import { UpdateTaskUseCase } from './UpdateTaskUseCase';

export class UpdateTaskController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
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
    } catch (err) {
      if (err instanceof Error && err.message === 'Task not found') {
        return res.status(404).json({ message: err.message });
      }

      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }

      return res.status(500).json({ message: 'Unexpected error' });
    }
  }
}