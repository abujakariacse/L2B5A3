import { Schema } from 'mongoose';

export type TBorrow = {
  book: Schema.Types.ObjectId;
  quantity: number;
  dueDate: Date;
};
