import { ITasksRepository } from '../../repositories/ITasksRepository';

export class DeleteTaskUseCase {
  constructor(
    private tasksRepository: ITasksRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.tasksRepository.delete(id);
  }
}