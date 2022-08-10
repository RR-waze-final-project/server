/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  async AddUser(
    role: string,
    firstName: string,
    lastName: string,
    phone: string,
    email: string
  ) {
    const newUser = new this.userModel({
      role,
      firstName,
      lastName,
      phone,
      email
    });
    return await newUser.save();
  }

  async getUsers() {
    return await this.userModel.find();
  }

  async getUserById(id: string) {
    return await this.userModel.findById(id).exec();
  }

  async getUserByEmail(email: string) {
    return await this.userModel.findOne({email: email}).exec();
  }

  async updateUser(
    id: string,
    role: string,
    firstName: string,
    lastName: string,
    phone: string,
    email: string
  ) {
    return await this.userModel
      .updateOne(
        { _id: id },
        {
          $set: {
            role: role,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
          },
        },
      )
      .exec();
  }

  async deleteUser(id: string) {
    return await this.userModel.findByIdAndDelete(id).exec();
  }
}
