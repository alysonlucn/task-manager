import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { IUserRepository } from '../../repositories/IUserRepository';
import { AppError } from '../../../../shared/errors/AppError';

interface IRequest {
  email: string;
  password: string;
}

export class AuthenticateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ email, password }: IRequest) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email or password incorrect', 401);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Email or password incorrect', 401);
    }

    const token = sign(
      {},
      process.env.JWT_SECRET as string,
      {
        subject: user.id,
        expiresIn: '1d',
      }
    );

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      token,
    };
  }
}