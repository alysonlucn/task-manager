import { Task } from '../entities/Task';

export interface ICreateTaskDTO {
  title: string;
  description?: string;
}

export interface ITasksRepository {
  create(data: ICreateTaskDTO): Promise<Task>;
  findById(id: string): Promise<Task | null>;
  save(task: Task): Promise<Task>;
  delete(id: string): Promise<void>;
}