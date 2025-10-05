import { Request, Response } from 'express';
import { bookServices } from './book.service';

const createBook = async (req: Request, res: Response) => {
  try {
    const data = await bookServices.createBook(req.body);
    res
      .status(201)
      .json({ success: true, message: 'Book created successfully', data });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, message: 'Validation failed', error });
  }
};

const getAllBooks = async (req: Request, res: Response) => {
  try {
    const data = await bookServices.getAllBooks(req.query);
    res.json({ success: true, message: 'Books retrieved successfully', data });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Failed to retrieve books', error });
  }
};

const getBookById = async (req: Request, res: Response) => {
  try {
    const data = await bookServices.getBookById(req.params.bookId);
    if (!data)
      return res
        .status(404)
        .json({ success: false, message: 'Book not found' });
    res.json({ success: true, message: 'Book retrieved successfully', data });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Failed to retrieve book', error });
  }
};

export const bookController = {
  createBook,
  getAllBooks,
  getBookById,
};
