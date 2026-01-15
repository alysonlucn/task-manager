import { ITasksRepository } from '../../repositories/ITasksRepository';
import { Task } from '../../entities/Task';

export class ListTasksUseCase {
  constructor(private tasksRepository: ITasksRepository) {}

  async execute(user_id: string): Promise<Task[]> {
    return this.tasksRepository.findAllByUser(user_id);
  }
}