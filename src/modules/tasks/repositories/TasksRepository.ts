import { Repository } from 'typeorm';
import { AppDataSource } from '../../../shared/infra/database/dataSource';
import { Task } from '../entities/Task';
import { v4 as uuidv4 } from 'uuid';

export class TasksRepository {
  private repository: Repository<Task>;

  constructor() {
    this.repository = AppDataSource.getRepository(Task);
  }

  async create({ title, description }): Promise<Task> {
    const task = this.repository.create({
      id: uuidv4(),
      title,
      description,
      is_completed: false,
    });

    console.log(task);

    await this.repository.save(task);

    return task;
  }

  async findAll(): Promise<Task[]> {
    return this.repository.find();
  }

}