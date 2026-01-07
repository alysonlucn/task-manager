import { TasksRepository } from '../../repositories/TasksRepository';
import { Task } from '../../entities/Task';

export class ListTasksUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  async execute(): Promise<Task[]> {
    return this.tasksRepository.findAll();
  }
}