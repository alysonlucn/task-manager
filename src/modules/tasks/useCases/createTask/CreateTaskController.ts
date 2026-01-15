import { Request, Response } from 'express';
import { TasksRepository } from '../../repositories/TasksRepository';
import { CreateTaskUseCase } from './CreateTaskUseCase';

export class CreateTaskController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { title, description } = req.body;
    const { id: userId } = req.user;

    const tasksRepository = new TasksRepository();
    const createTaskUseCase = new CreateTaskUseCase(tasksRepository);

    const task = await createTaskUseCase.execute({ title, description, user_id: userId });

    return res.status(201).json(task);
  }
}