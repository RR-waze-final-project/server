/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
import { Types } from 'mongoose';

export const UserSchema = new mongoose.Schema({
  role: { type: String, enum: ['admin', 'customer'], required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true},
});

export interface User {
  _id: Types.ObjectId,
  uid: string;
  role: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

