import { Repository } from 'typeorm';
import { AppDataSource } from '../../../shared/infra/database/dataSource';
import { Task } from '../entities/Task';
import { ITasksRepository } from './ITasksRepository';

export class TasksRepository implements ITasksRepository {
  private repository: Repository<Task>;

  constructor() {
    this.repository = AppDataSource.getRepository(Task);
  }

  async create(task: Task): Promise<Task> {
    const taskCreated = this.repository.create(task);
    return this.repository.save(taskCreated);
  }

  async findById(id: string): Promise<Task | null> {
    return this.repository.findOne({ where: { id } });
  }

  async findAllByUser(user_id: string): Promise<Task[]> {
    return this.repository.find({
      where: { user_id },
    });
  }

  async save(task: Task): Promise<Task> {
    return this.repository.save(task);
  }

  async delete(task: Task): Promise<void> {
    await this.repository.remove(task);
  }
}