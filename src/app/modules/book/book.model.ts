import { Schema, model } from 'mongoose';
import { TBook } from './book.interface';

const bookSchema = new Schema<TBook>(
  {
    title: {
      type: String,
      required: [true, 'Book title is required'],
      trim: true,
    },
    author: {
      type: String,
      required: [true, 'Author name is required'],
      trim: true,
    },
    genre: {
      type: String,
      required: [true, 'Genre is required'],
      enum: {
        values: [
          'FICTION',
          'NON_FICTION',
          'SCIENCE',
          'HISTORY',
          'BIOGRAPHY',
          'FANTASY',
        ],
        message:
          'Invalid genre. Must be one of: FICTION, NON_FICTION, SCIENCE, HISTORY, BIOGRAPHY, FANTASY',
      },
    },
    isbn: {
      type: String,
      required: [true, 'ISBN is required'],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      default: '',
      trim: true,
    },
    copies: {
      type: Number,
      required: [true, 'Copies count is required'],
      min: [0, 'Copies cannot be negative'],
      validate: {
        validator: Number.isInteger,
        message: 'Copies must be an integer',
      },
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Book = model<TBook>('Book', bookSchema);
