import { Task } from '../../entities/Task';
import { ITasksRepository } from '../../repositories/ITasksRepository';
import { AppError } from '../../../../shared/errors/AppError';

interface IRequest {
  title: string;
  description?: string;
  user_id: string;
}

export class CreateTaskUseCase {
  constructor(private tasksRepository: ITasksRepository) {}

  async execute({ title, description, user_id }: IRequest): Promise<Task> {
    if (!title || title.trim().length === 0) {
      throw new AppError('Title is required', 400);
    }

    const task = new Task();
    task.title = title;
    task.description = description;
    task.user_id = user_id;

    return this.tasksRepository.create(task);
  }
}