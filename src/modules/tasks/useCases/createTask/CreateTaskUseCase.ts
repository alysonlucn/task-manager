import { ITasksRepository } from '../../repositories/ITasksRepository';

interface IRequest {
  title: string;
  description?: string;
}

export class CreateTaskUseCase {
  constructor(private tasksRepository: ITasksRepository) {}

  async execute({ title, description }: IRequest) {
    if (!title || title.trim().length === 0) {
      throw new Error('Title is required');
    }

    const task = await this.tasksRepository.create({
      title,
      description,
    });

    return task;
  }
}