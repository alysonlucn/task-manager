import { Router } from 'express';
import { healthRoutes } from './health.routes';
import { tasksRoutes } from './tasks.routes';

const routes = Router();

routes.use(healthRoutes);
routes.use(tasksRoutes);
routes.use('/users', require('./users.routes').usersRoutes);

export { routes };