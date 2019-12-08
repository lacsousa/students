import { Router } from 'express';

import StudentController from './app/controllers/StudentController';

const routes = new Router();

routes.post('/students', StudentController.store);

routes.get('/students', StudentController.index);

export default routes;