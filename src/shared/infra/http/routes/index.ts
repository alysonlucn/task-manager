import { Router } from 'express';
import { healthRoutes } from './health.routes';
import { tasksRoutes } from './tasks.routes';

const routes = Router();

routes.use(healthRoutes);
routes.use(tasksRoutes);

export { routes };