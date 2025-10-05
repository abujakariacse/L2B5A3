import { Book } from './book.model';

const createBook = async (payload: any) => {
  return await Book.create(payload);
};

export const bookServices = {
  createBook,
};
