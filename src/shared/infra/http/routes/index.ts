import { Router } from 'express';
import { healthRoutes } from './health.routes';
import { tasksRoutes } from './tasks.routes';
import { usersRoutes } from './users.routes';

const routes = Router();

routes.use(healthRoutes);
routes.use('/users', usersRoutes);
routes.use(tasksRoutes);

export { routes };