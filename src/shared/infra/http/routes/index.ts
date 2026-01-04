import { Router } from 'express';
import { HealthController } from '../../../../modules/health/controllers/HealthController';

const routes = Router();

const healthController = new HealthController();

routes.get('/health', healthController.index);

export default routes;