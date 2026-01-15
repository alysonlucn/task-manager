import { Task } from '../entities/Task';

export interface ITasksRepository {
  create(task: Task): Promise<Task>;
  findById(id: string): Promise<Task | null>;
  findAllByUser(user_id: string): Promise<Task[]>;
  save(task: Task): Promise<Task>;
  delete(task: Task): Promise<void>;
}