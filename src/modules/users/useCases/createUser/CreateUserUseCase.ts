import { hash } from 'bcryptjs';
import { IUserRepository } from '../../repositories/IUserRepository';
import { AppError } from '../../../../shared/errors/AppError';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ name, email, password }: IRequest) {
    const userExists = await this.userRepository.findByEmail(email);

    if (userExists) {
      throw new AppError('User already exists', 409);
    }

    const hashedPassword = await hash(password, 8);

    const user = await this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }
}