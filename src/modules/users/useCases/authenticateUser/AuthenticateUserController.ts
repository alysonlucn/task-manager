import { Request, Response } from 'express';
import { UserRepository } from '../../repositories/UserRepository';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

export class AuthenticateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const userRepository = new UserRepository();
    const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository);

    const result = await authenticateUserUseCase.execute({
      email,
      password,
    });

    return res.json(result);
  }
}