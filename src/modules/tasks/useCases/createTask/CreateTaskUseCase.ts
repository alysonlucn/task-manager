import { Task } from '../../entities/Task';
import { ITasksRepository } from '../../repositories/ITasksRepository';

interface IRequest {
  title: string;
  description?: string;
}

export class CreateTaskUseCase {
  constructor(private tasksRepository: ITasksRepository) {}

  async execute({ title, description }: IRequest): Promise<Task> {
    if (!title || title.trim().length === 0) {
      throw new Error('Title is required');
    }

    const task = new Task();
    task.title = title;
    task.description = description;
    task.is_completed = false;

    return this.tasksRepository.create(task);
  }
}