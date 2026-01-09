import { Router } from 'express';
import { CreateTaskController } from '../../../../modules/tasks/useCases/createTask/CreateTaskController';
import { ListTasksController } from '../../../../modules/tasks/useCases/listTasks/ListTasksController';
import { UpdateTaskController } from '../../../../modules/tasks/useCases/updateTask/UpdateTaskController';
import { DeleteTaskController } from '../../../../modules/tasks/useCases/deleteTask/DeleteTaskController';

const tasksRoutes = Router();

const createTaskController = new CreateTaskController();
const listTasksController = new ListTasksController();
const updateTaskController = new UpdateTaskController();
const deleteTaskController = new DeleteTaskController();

tasksRoutes.post('/tasks', createTaskController.handle);
tasksRoutes.get('/tasks', listTasksController.handle);
tasksRoutes.put('/tasks/:id', updateTaskController.handle);
tasksRoutes.delete('/tasks/:id', deleteTaskController.handle);

export { tasksRoutes };