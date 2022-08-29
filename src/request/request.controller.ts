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
import { RequestService } from './request.service';

@Controller('request')
export class RequestController {
    constructor(private requestService: RequestService) { }

    @Get()
    async getAll() {
        try {
            return await this.requestService.getRequests();
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    @Get(':uid')
    async getRequestById(@Param('uid') uid: string) {
        try {
            return await this.requestService.getRequestById(uid);
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    @Get('systemsRequests/:systemUid')
    async getRequestsOfSystem(@Param('systemUid') systemUid: string) {
        return await this.requestService.getRequestsOfSystem(systemUid);
    }

    @Post()
    async createRequest(
        @Body('firstName') firstName: string,
        @Body('lastName') lastName: string,
        @Body('email') email: string,
        @Body('phone') phone: string,
        @Body('systemId') systemId: string,
        @Body('displayName') displayName: string,
        @Body('status') status: string,
        @Body('notes') notes: string,
    ) {
        try {
            return await this.requestService.AddRequest(
                firstName,
                lastName,
                email,
                phone,
                systemId,
                displayName,
                status,
                notes,
            );
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    @Put(':uid')
    async updateRequest(
        @Param('uid') uid: string,
        @Body('firstName') firstName: string,
        @Body('lastName') lastName: string,
        @Body('email') email: string,
        @Body('phone') phone: string,
        @Body('systemId') systemId: string,
        @Body('displayName') displayName: string,
        @Body('status') status: string,
        @Body('notes') notes: string,
    ) {
        try {
            const isExists = await this.requestService.getRequestById(uid);

            if (!isExists) {
                return {
                    statusCode: 403,
                    message: ['user is not exists'],
                    error: 'Bad Request',
                };
            }

            return await this.requestService.updateRequest(
                uid,
                firstName,
                lastName,
                email,
                phone,
                systemId,
                displayName,
                status,
                notes,
            );
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    @Delete(':uid')
    async deleteRequest(@Param('uid') uid: string) {
        try {
            return await this.requestService.deleteRequest(uid);
        } catch (err) {
            console.log(err);
            return err;
        }
    }
}
