import { Router } from 'express';
import { CreateTaskController } from '../../../../modules/tasks/useCases/createTask/CreateTaskController';
import { ListTasksController } from '../../../../modules/tasks/useCases/listTasks/ListTasksController';

const tasksRoutes = Router();

const createTaskController = new CreateTaskController();
const listTasksController = new ListTasksController();

tasksRoutes.post('/tasks', createTaskController.handle);
tasksRoutes.get('/tasks', listTasksController.handle);

export { tasksRoutes };