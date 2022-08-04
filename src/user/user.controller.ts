import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAll() {
    return await this.userService.getUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return await this.userService.getUserById(id);
  }

  @Post()
  async signup(
    @Body('phone') phone: string,
    @Body('age') age: number,
    @Body('name') name: string,
  ) {
    return await this.userService.AddUser(phone, age, name);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body('phone') phone: string,
    @Body('age') age: number,
    @Body('name') name: string,
  ) {
    return await this.userService.updateUser(id, phone, age, name);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return await this.userService.deleteUser(id);
  }
}
