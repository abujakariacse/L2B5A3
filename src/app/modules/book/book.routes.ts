import { Router } from 'express';
import { bookController } from './book.controller';

const router = Router();

router.post('/', bookController.createBook);

router.get('/', bookController.getAllBooks);

export const bookRoutes = {
  router,
};
