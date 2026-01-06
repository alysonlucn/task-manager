import { Router } from 'express';
import { CreateTaskController } from '../../../../modules/tasks/controllers/CreateTaskController';
import { HealthController } from '../../../../modules/health/controllers/HealthController';

const routes = Router();

const createTaskController = new CreateTaskController();
const healthController = new HealthController();

routes.get('/health', healthController.index);
routes.post('/tasks', createTaskController.handle);

export { routes };