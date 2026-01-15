import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { AppDataSource } from '../../../shared/infra/database/dataSource';
import { User } from '../entities/User';
import { ICreateUserDTO, IUserRepository } from './IUserRepository';

export class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create({ name, email, password }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      id: uuidv4(),
      name,
      email,
      password,
    });

    await this.repository.save(user);
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.repository.findOne({ where: { email } });
  }

  async findById(id: string): Promise<User | null> {
    return this.repository.findOne({ where: { id } });
  }
}