import { Request, Response } from 'express';
import { TasksRepository } from '../repositories/TasksRepository';
import { CreateTaskUseCase } from '../useCases/createTask/CreateTaskUseCase';

export class CreateTaskController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description } = request.body;

    const tasksRepository = new TasksRepository();
    const createTaskUseCase = new CreateTaskUseCase(tasksRepository);

    const task = await createTaskUseCase.execute({
      title,
      description,
    });

    return response.status(201).json(task);
  }
}