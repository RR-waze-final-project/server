/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAll() {
    try {
      return await this.userService.getUsers();
    } catch (err) {
      console.log(err);
      return err;
    }
    
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    try {  
      return await this.userService.getUserById(id);
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  @Get('email:email')
  async getUserByEmail(@Param('email') email: string) {
    try {  
      return await this.userService.getUserByEmail(email);
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  @Post()
  async signup(
    @Body('role') role: string,
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('phone') phone: string,
    @Body('email') email: string,
  ) {
    try {
      return await this.userService.addUser(
      role,
      firstName,
      lastName,
      phone,
      email
      );
    } catch (err) {
      return err;
    }
    
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body('role') role: string,
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('phone') phone: string,
    @Body('email') email: string,
  ) {
    try {
      const isExists = await this.userService.getUserById(id);

      if (!isExists) {
        return {
          statusCode: 403,
          message: ['user is not exists'],
          error: 'Bad Request',
        };
      }

      return await this.userService.updateUser(id, role, firstName, lastName, phone, email);
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    try{ 
      return await this.userService.deleteUser(id);
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
