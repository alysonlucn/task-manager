import { ITasksRepository } from '../../repositories/ITasksRepository';
import { AppError } from '../../../../shared/errors/AppError';

export class DeleteTaskUseCase {
  constructor(private tasksRepository: ITasksRepository) {}

  async execute(id: string): Promise<void> {
    const task = await this.tasksRepository.findById(id);

    if (!task) {
      throw new AppError('Task not found', 404);
    }

    await this.tasksRepository.delete(task);
  }
}