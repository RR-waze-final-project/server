import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async AddUser(phone: string, age: number, name: string) {
    const newUser = new this.userModel({ phone, age, name });
    const result = await newUser.save();
    console.log(result);
  }
  async getUsers() {
    const result = await this.userModel.find();
    return result;
  }

  async getUserById(id: string) {
    const result = await this.userModel.findById(id).exec();
    return result;
  }

  async updateUser(id: string, phone: string, age: number, name: string) {
    await this.userModel
      .updateOne(
        { _id: id },
        {
          $set: {
            phone: phone,
            age: age,
            name: name,
          },
        },
      )
      .exec();
    return null;
  }
  async deleteUser(id: string) {
    const result = await this.userModel.findByIdAndDelete(id).exec();
    return result;
  }
}
