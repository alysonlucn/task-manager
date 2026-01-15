import { ITasksRepository } from '../../repositories/ITasksRepository';
import { Task } from '../../entities/Task';
import { AppError } from '../../../../shared/errors/AppError';

interface IRequest {
  id: string;
  title?: string;
  description?: string;
  user_id: string;
}

export class UpdateTaskUseCase {
  constructor(private tasksRepository: ITasksRepository) {}

  async execute({ id, title, description, user_id }: IRequest): Promise<Task> {
    const task = await this.tasksRepository.findById(id);

    if (!task) {
      throw new AppError('Task not found', 404);
    }

    if (task.user_id !== user_id) {
      throw new AppError('Unauthorized', 403);
    }

    if (title !== undefined && title.trim().length === 0) {
      throw new AppError('Title cannot be empty', 400);
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