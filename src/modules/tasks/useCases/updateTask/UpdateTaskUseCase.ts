import { ITasksRepository } from '../../repositories/ITasksRepository';

interface IRequest {
  id: string;
  title?: string;
  description?: string;
}

export class UpdateTaskUseCase {
  constructor(private tasksRepository: ITasksRepository) {}

  async execute({ id, title, description }: IRequest) {
    const task = await this.tasksRepository.findById(id);

    if (!task) {
      throw new Error('Task not found');
    }

    if (title !== undefined) {
      task.title = title;
    }

    if (description !== undefined) {
      task.description = description;
    }

    await this.tasksRepository.save(task);

    return task;
  }
}