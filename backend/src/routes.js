import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import PhoneController from './app/controllers/PhoneController';
import SessionController from './app/controllers/SessionController';
import SearchController from './app/controllers/SearchController';
import CallController from './app/controllers/CallController';

const routes = new Router();

routes.get('/searchs/:search', SearchController.index);

routes.post('/sessions', SessionController.store);
routes.use(authMiddleware);

routes.get('/calls', CallController.index);

routes.get('/phones', PhoneController.index);
routes.post('/phones', PhoneController.store);
routes.get('/phones/:id', PhoneController.show);
routes.put('/phones/:id', PhoneController.update);
routes.delete('/phones/:id', PhoneController.delete);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

export default routes;
