import { Router } from 'express';
import { borrowControllers } from './borrow.controller';

const router = Router();

router.post('/', borrowControllers.borrowBook);
router.get('/', borrowControllers.getBorrowSummary);

export const borrowRoutes = {
  router,
};
