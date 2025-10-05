import { Request, Response } from 'express';
import { borrowServices } from './borrow.service';

const borrowBook = async (req: Request, res: Response) => {
  try {
    const { book, quantity, dueDate } = req.body;
    const data = await borrowServices.borrowBook(book, quantity, dueDate);
    res
      .status(201)
      .json({ success: true, message: 'Book borrowed successfully', data });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, message: (error as Error).message, error });
  }
};

const getBorrowSummary = async (_req: Request, res: Response) => {
  try {
    const data = await borrowServices.getBorrowSummary();
    res.json({
      success: true,
      message: 'Borrowed books summary retrieved successfully',
      data,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Failed to get summary', error });
  }
};

export const borrowControllers = {
  borrowBook,
  getBorrowSummary,
};
