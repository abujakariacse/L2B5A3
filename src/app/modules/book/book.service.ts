import { FilterQuery } from 'mongoose';
import { Book } from './book.model';

const createBook = async (payload: any) => {
  return await Book.create(payload);
};

const getAllBooks = async (query: any) => {
  const filter: FilterQuery<any> = {};
  if (query.filter) filter.genre = query.filter;

  const sort: any = {};
  if (query.sortBy && query.sort)
    sort[query.sortBy] = query.sort === 'desc' ? -1 : 1;

  const limit = query.limit ? parseInt(query.limit) : 10;

  return await Book.find(filter).sort(sort).limit(limit);
};

const getBookById = async (id: string) => {
  return await Book.findById(id);
};

const updateBook = async (id: string, payload: any) => {
  return await Book.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
};

const deleteBook = async (id: string) => {
  return await Book.findByIdAndDelete(id);
};

export const bookServices = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
