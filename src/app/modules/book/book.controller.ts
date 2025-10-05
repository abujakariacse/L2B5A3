import { Request, Response } from 'express';
import { bookServices } from './book.service';

export const createBook = async (req: Request, res: Response) => {
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

export const bookController = {
  createBook,
};
