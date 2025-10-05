import { Borrow } from './borrow.model';

const borrowBook = async (bookId: string, quantity: number, dueDate: Date) => {
  return await (Borrow as any).borrowBook(bookId, quantity, dueDate);
};

const getBorrowSummary = async () => {
  return await Borrow.aggregate([
    {
      $group: {
        _id: '$book',
        totalQuantity: { $sum: '$quantity' },
      },
    },
    {
      $lookup: {
        from: 'books',
        localField: '_id',
        foreignField: '_id',
        as: 'bookDetails',
      },
    },
    { $unwind: '$bookDetails' },
    {
      $project: {
        _id: 0,
        book: {
          title: '$bookDetails.title',
          isbn: '$bookDetails.isbn',
        },
        totalQuantity: 1,
      },
    },
  ]);
};

export const borrowServices = {
  borrowBook,
  getBorrowSummary,
};
