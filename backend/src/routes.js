import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/login', SessionController.store);
routes.use(authMiddleware);

routes.get('/users', UserController.index);

export default routes;
