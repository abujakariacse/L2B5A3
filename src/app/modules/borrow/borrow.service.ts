import { Borrow } from './borrow.model';

const borrowBook = async (bookId: string, quantity: number, dueDate: Date) => {
  return await (Borrow as any).borrowBook(bookId, quantity, dueDate);
};

export const borrowServices = {
  borrowBook,
};
