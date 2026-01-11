import { ITasksRepository } from '../../repositories/ITasksRepository';
import { Task } from '../../entities/Task';
import { AppError } from '../../../../shared/errors/AppError';

interface IRequest {
  id: string;
  title?: string;
  description?: string;
}

export class UpdateTaskUseCase {
  constructor(private tasksRepository: ITasksRepository) {}

  async execute({ id, title, description }: IRequest): Promise<Task> {
    const task = await this.tasksRepository.findById(id);

    if (!task) {
      throw new AppError('Task not found', 404);
    }

    if (title !== undefined && title.trim().length === 0) {
      throw new AppError('Title cannot be empty', 404);
    }

    if (title !== undefined) {
      task.title = title;
    }

    if (description !== undefined) {
      task.description = description;
    }

    return this.tasksRepository.save(task);
  }
}