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
import { SystemService } from './system.service';

@Controller('system')
export class SystemController {
  constructor(private systemService: SystemService) {}

  @Get()
  async getAll() {
    try {
      return await this.systemService.getSystems();
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  @Get(':uid')
  async getSystemById(@Param('uid') uid: string) {
    try {
      return await this.systemService.getSystemById(uid);
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  //   @Get(':adminUid')
  //   async getSystemsOfAdmin(@Param('adminUid') adminUid: string) {
  //     return await this.systemService.getSystemsOfAdmin(adminUid);
  //   }

  @Post()
  async createSystem(
    @Body('topic') topic: string,
    @Body('urlName') urlName: string,
    @Body('urlImg') urlImg: string,
    @Body('objectName') objectName: string,
    @Body('adminUid') adminUid: string,
    @Body('description') description: string,
    @Body('communicationDetails') communicationDetails: object,
  ) {
    try {
      return await this.systemService.AddSystem(
        topic,
        urlName,
        urlImg,
        objectName,
        adminUid,
        description,
        communicationDetails,
      );
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  @Put(':uid')
  async updateSystem(
    @Param('uid') uid: string,
    @Body('topic') topic: string,
    @Body('urlName') urlName: string,
    @Body('urlImg') urlImg: string,
    @Body('objectName') objectName: string,
    @Body('adminUid') adminUid: string,
    @Body('description') description: string,
    @Body('communicationDetails') communicationDetails: object,
  ) {
    try {
      const isExists = await this.systemService.getSystemById(uid);

      if (!isExists) {
        return {
          statusCode: 403,
          message: ['user is not exists'],
          error: 'Bad Request',
        };
      }

      return await this.systemService.updateSystem(
        uid,
        topic,
        urlName,
        urlImg,
        objectName,
        adminUid,
        description,
        communicationDetails,
      );
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  @Delete(':uid')
  async deleteSystem(@Param('uid') uid: string) {
    try {
      return await this.systemService.deleteSystem(uid);
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
