import { Router } from 'express';
import { bookRoutes } from '../modules/book/book.routes';
import { borrowRoutes } from '../modules/borrow/borrow.route';
const router = Router();

router.use('/books', bookRoutes.router);
router.use('/borrow', borrowRoutes.router);

export const appRoutes = {
  router,
};
