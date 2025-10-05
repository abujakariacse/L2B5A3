import { Schema, model } from 'mongoose';
import { TBorrow } from './borrow.interface';
import { Book } from '../book/book.model';

const schema = new Schema<TBorrow>(
  {
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    quantity: {
      type: Number,
      required: true,
      min: [1, 'Quantity must be positive'],
    },
    dueDate: { type: Date, required: true },
  },
  { timestamps: true, versionKey: false },
);

// Statics for borrow logic
schema.statics.borrowBook = async function (
  bookId: string,
  quantity: number,
  dueDate: Date,
) {
  const book = await Book.findById(bookId);
  if (!book) throw new Error('Book not found');
  if (book.copies < quantity) throw new Error('Not enough copies available');

  book.copies -= quantity;
  if (book.copies === 0) book.available = false;
  await book.save();

  return this.create({ book: bookId, quantity, dueDate });
};

export const Borrow = model<TBorrow>('Borrow', schema);
