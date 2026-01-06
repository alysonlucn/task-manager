import { Task } from '../entities/Task';

export interface ICreateTaskDTO {
  title: string;
  description?: string;
}

export interface ITasksRepository {
  create(data: ICreateTaskDTO): Promise<Task>;
}