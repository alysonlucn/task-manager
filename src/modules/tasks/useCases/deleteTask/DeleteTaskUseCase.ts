import { ITasksRepository } from '../../repositories/ITasksRepository';

export class DeleteTaskUseCase {
  constructor(
    private tasksRepository: ITasksRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const task = await this.tasksRepository.findById(id);

    if (!task) {
      throw new Error('Task not found');
    }

    await this.tasksRepository.delete(id);
  }
}