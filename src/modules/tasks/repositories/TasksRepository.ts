import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { AppDataSource } from '../../../shared/infra/database/dataSource';
import { Task } from '../entities/Task';
import { ICreateTaskDTO, ITasksRepository } from './ITasksRepository';

export class TasksRepository implements ITasksRepository {
  private repository: Repository<Task>;

  constructor() {
    this.repository = AppDataSource.getRepository(Task);
  }

  async create({ title, description }: ICreateTaskDTO): Promise<Task> {
    const task = this.repository.create({
      id: uuidv4(),
      title,
      description,
      is_completed: false,
    });

    await this.repository.save(task);
    return task;
  }

  async findById(id: string): Promise<Task | null> {
    return this.repository.findOneBy({ id });
  }

  async save(task: Task): Promise<Task> {
    return this.repository.save(task);
  }

  async findAll(): Promise<Task[]> {
    return this.repository.find();
  }
}