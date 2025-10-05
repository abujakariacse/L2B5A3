import { Schema, model } from 'mongoose';
import { TBorrow } from './borrow.interface';

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

export const BorrowModel = model<TBorrow>('Borrow', schema);
