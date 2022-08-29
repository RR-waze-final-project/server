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
  import { MarkerService } from './marker.service';
  
  @Controller('marker')
  export class MarkerController {
    constructor(private markerService: MarkerService) { }
  
    @Get()
    async getAll() {
      try {
        return await this.markerService.getMarkers();
      } catch (err) {
        console.log(err);
        return err;
      }
    }
  
    @Get(':uid')
    async getMarkerById(@Param('uid') uid: string) {
      try {
        return await this.markerService.getMarkerById(uid);
      } catch (err) {
        console.log(err);
        return err;
      }
    }
  
    @Get('systemsMArkers/:systemUid')
    async getMarkersOfSystem(@Param('systemUid') systemUid: string) {
      return await this.markerService.getMarkersOfSystem(systemUid);
    }
  
    @Post()
    async createMarker(
      @Body('manager_id') manager_id: string,
      @Body('system_id') system_id: string,
      @Body('locationGeolocation') locationGeolocation: object,
      @Body('description') description: string,
      @Body('name') name: string,
      @Body('notes') notes: string,
      @Body('communicationDetails') communicationDetails: object,
    ) {
      try {
        return await this.markerService.AddMarker(
            manager_id,
            system_id,
            locationGeolocation,
            description,
            name,
            notes,
            communicationDetails,
        );
      } catch (err) {
        console.log(err);
        return err;
      }
    }
  
    @Put(':uid')
    async updateMarker(
      @Param('uid') uid: string,
      @Body('manager_id') manager_id: string,
      @Body('system_id') system_id: string,
      @Body('locationGeolocation') locationGeolocation: object,
      @Body('description') description: string,
      @Body('name') name: string,
      @Body('notes') notes: string,
      @Body('communicationDetails') communicationDetails: object,
    ) {
      try {
        const isExists = await this.markerService.getMarkerById(uid);
  
        if (!isExists) {
          return {
            statusCode: 403,
            message: ['user is not exists'],
            error: 'Bad Request',
          };
        }
  
        return await this.markerService.updateMarker(
          uid,
          manager_id,
          system_id,
          locationGeolocation,
          description,
          name,
          notes,
          communicationDetails,
        );
      } catch (err) {
        console.log(err);
        return err;
      }
    }
  
    @Delete(':uid')
    async deleteMarker(@Param('uid') uid: string) {
      try {
        return await this.markerService.deleteMarker(uid);
      } catch (err) {
        console.log(err);
        return err;
      }
    }
  }
  