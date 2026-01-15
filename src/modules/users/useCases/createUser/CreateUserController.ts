import { Request, Response } from 'express';
import { UserRepository } from '../../repositories/UserRepository';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const userRepository = new UserRepository();
    const createUserUseCase = new CreateUserUseCase(userRepository);

    const user = await createUserUseCase.execute({
      name,
      email,
      password,
    });

    return res.status(201).json(user);
  }
}