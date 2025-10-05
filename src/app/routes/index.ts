import { Router } from 'express';
import { bookRoutes } from '../modules/book/book.routes';
const router = Router();

router.use('/books', bookRoutes.router);

export const appRoutes = {
  router,
};
