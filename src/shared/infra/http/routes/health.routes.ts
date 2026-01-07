import { Router } from 'express';
import { HealthController } from '../../../../modules/health/controllers/HealthController';

const healthRoutes = Router();

const healthController = new HealthController();

healthRoutes.get('/health', healthController.index);

export { healthRoutes };