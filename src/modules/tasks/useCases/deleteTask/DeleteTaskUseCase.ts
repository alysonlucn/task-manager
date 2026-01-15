import { ITasksRepository } from '../../repositories/ITasksRepository';
import { AppError } from '../../../../shared/errors/AppError';

export class DeleteTaskUseCase {
  constructor(private tasksRepository: ITasksRepository) {}

  async execute(taskId: string, userId: string): Promise<void> {
    const task = await this.tasksRepository.findById(taskId);

    if (!task) {
      throw new AppError('Task not found', 404);
    }

    if (task.user_id !== userId) {
      throw new AppError('Unauthorized', 403);
    }

    await this.tasksRepository.delete(task);
  }
}