import { User } from '../entities/User';

export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

export interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
}