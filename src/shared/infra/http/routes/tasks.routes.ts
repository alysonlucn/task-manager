import { Router } from 'express';
import { CreateTaskController } from '../../../../modules/tasks/useCases/createTask/CreateTaskController';
import { ListTasksController } from '../../../../modules/tasks/useCases/listTasks/ListTasksController';
import { UpdateTaskController } from '../../../../modules/tasks/useCases/updateTask/UpdateTaskController';
import { DeleteTaskController } from '../../../../modules/tasks/useCases/deleteTask/DeleteTaskController';
import { FindTaskByIdController } from '../../../../modules/tasks/useCases/FindTaskById/FindTaskByIdController';

const tasksRoutes = Router();

const createTaskController = new CreateTaskController();
const listTasksController = new ListTasksController();
const updateTaskController = new UpdateTaskController();
const deleteTaskController = new DeleteTaskController();
const findTaskByIdController = new FindTaskByIdController();

tasksRoutes.post('/tasks', createTaskController.handle);
tasksRoutes.get('/tasks', listTasksController.handle);
tasksRoutes.put('/tasks/:id', updateTaskController.handle);
tasksRoutes.delete('/tasks/:id', deleteTaskController.handle);
tasksRoutes.get('/tasks/:id', findTaskByIdController.handle);

export { tasksRoutes };