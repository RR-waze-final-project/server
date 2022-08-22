/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  fireBaseUId: { type: String, required: true, unique: true },
  role: { type: String, enum: ['admin', 'customer'], required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true},
});

export interface User {
  uid: string;
  fireBaseUId: string;
  role: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

