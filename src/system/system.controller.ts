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
  constructor(private systemService: SystemService) { }

  @Get()
  async getAll() {
    try {
      return await this.systemService.getSystems();
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  @Get(':_id')
  async getSystemById(@Param('_id') _id: string) {
    try {
      return await this.systemService.getSystemById(_id);
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  @Get('specificSystems/:adminUid')
  async getSystemsOfAdmin(@Param('adminUid') adminUid: string) {
    return await this.systemService.getSystemsOfAdmin(adminUid);
  }
  
  @Get('urlName/:urlName')
  async getSystemByUrlName(@Param('urlName') urlName: string) {
    return await this.systemService.getSystemByUrlName(urlName);
  }

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

  @Put(':_id')
  async updateSystem(
    @Param('_id') _id: string,
    @Body('topic') topic: string,
    @Body('urlName') urlName: string,
    @Body('urlImg') urlImg: string,
    @Body('objectName') objectName: string,
    @Body('adminUid') adminUid: string,
    @Body('description') description: string,
    @Body('communicationDetails') communicationDetails: object,
  ) {
    try {
      const isExists = await this.systemService.getSystemById(_id);

      if (!isExists) {
        return {
          statusCode: 403,
          message: ['user is not exists'],
          error: 'Bad Request',
        };
      }
      
      return await this.systemService.updateSystem(
        _id,
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

  @Delete(':_id')
  async deleteSystem(@Param('_id') _id: string) {
    try {
      return await this.systemService.deleteSystem(_id);
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
