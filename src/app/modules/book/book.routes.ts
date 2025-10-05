import { Router } from 'express';
import { bookController } from './book.controller';

const router = Router();

router.post('/', bookController.createBook);

router.get('/', bookController.getAllBooks);

router.get('/:bookId', bookController.getBookById);

router.put('/:bookId', bookController.updateBook);

export const bookRoutes = {
  router,
};
