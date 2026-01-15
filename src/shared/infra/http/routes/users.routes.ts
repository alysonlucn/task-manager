import { Router } from 'express';
import { CreateUserController } from '../../../../modules/users/useCases/createUser/CreateUserController';
import { AuthenticateUserController } from '../../../../modules/users/useCases/authenticateUser/AuthenticateUserController';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

usersRoutes.post('/', createUserController.handle);
usersRoutes.post('/login', authenticateUserController.handle);

export { usersRoutes };