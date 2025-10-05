import { Router } from 'express';
import { borrowControllers } from './borrow.controller';

const router = Router();

router.post('/', borrowControllers.borrowBook);

export const borrowRoutes = {
  router,
};
