import { ITasksRepository } from '../../repositories/ITasksRepository';
import { Task } from '../../entities/Task';
import { AppError } from '../../../../shared/errors/AppError';

export class ToggleTaskCompletionUseCase {
  constructor(private tasksRepository: ITasksRepository) {}

  async execute(id: string, user_id: string): Promise<Task> {
    const task = await this.tasksRepository.findById(id);

    if (!task) {
      throw new AppError('Task not found', 404);
    }

    if (task.user_id !== user_id) {
      throw new AppError('Unauthorized', 403);
    }

    task.is_completed = !task.is_completed;

    return this.tasksRepository.save(task);
  }
}