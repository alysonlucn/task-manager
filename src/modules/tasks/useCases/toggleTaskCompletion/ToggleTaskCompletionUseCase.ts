import { ITasksRepository } from '../../repositories/ITasksRepository';
import { AppError } from '../../../../shared/errors/AppError';

export class ToggleTaskCompletionUseCase {
  constructor(private tasksRepository: ITasksRepository) {}

  async execute(id: string) {
    const task = await this.tasksRepository.findById(id);

    if (!task) {
      throw new AppError('Task not found', 404);
    }

    task.is_completed = !task.is_completed;

    await this.tasksRepository.save(task);

    return task;
  }
}