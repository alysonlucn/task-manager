import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateTaskController } from '../../../../modules/tasks/useCases/createTask/CreateTaskController';
import { UpdateTaskController } from '../../../../modules/tasks/useCases/updateTask/UpdateTaskController';
import { DeleteTaskController } from '../../../../modules/tasks/useCases/deleteTask/DeleteTaskController';
import { FindTaskByIdController } from '../../../../modules/tasks/useCases/findTaskById/FindTaskByIdController';
import { ToggleTaskCompletionController } from '../../../../modules/tasks/useCases/toggleTaskCompletion/ToggleTaskCompletionController';
import { ListTasksController } from '../../../../modules/tasks/useCases/listTasks/ListTasksController';

const tasksRoutes = Router();

const createTaskController = new CreateTaskController();
const updateTaskController = new UpdateTaskController();
const deleteTaskController = new DeleteTaskController();
const findTaskByIdController = new FindTaskByIdController();
const toggleTaskCompletionController = new ToggleTaskCompletionController();
const listTasksController = new ListTasksController();

tasksRoutes.use(ensureAuthenticated);

tasksRoutes.post('/tasks', createTaskController.handle);
tasksRoutes.get('/tasks', listTasksController.handle);
tasksRoutes.put('/tasks/:id', updateTaskController.handle);
tasksRoutes.delete('/tasks/:id', deleteTaskController.handle);
tasksRoutes.get('/tasks/:id', findTaskByIdController.handle);
tasksRoutes.patch('/tasks/:id/complete', toggleTaskCompletionController.handle);

export { tasksRoutes };