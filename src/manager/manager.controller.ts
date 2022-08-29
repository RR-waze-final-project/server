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
import { ManagerService } from './manager.service';

@Controller('manager')
export class ManagerController {
    constructor(private managerService: ManagerService) { }

    @Get()
    async getAll() {
        try {
            return await this.managerService.getManagers();
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    @Get(':uid')
    async getManagerById(@Param('uid') uid: string) {
        try {
            return await this.managerService.getManagerById(uid);
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    @Get('systemsManagers/:systemUid')
    async getManagersOfSystem(@Param('systemUid') systemUid: string) {
        return await this.managerService.getManagersOfSystem(systemUid);
    }

    @Post()
    async createManager(
        @Body('userId') userId: string,
        @Body('systemId') systemId: string,
        @Body('active') active: string,
        @Body('displayName') displayName: string,
        @Body('role') role: string,
    ) {
        try {
            return await this.managerService.AddManager(
                userId,
                systemId,
                active,
                displayName,
                role,
            );
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    @Put(':uid')
    async updateManager(
        @Param('uid') uid: string,
        @Body('userId') userId: string,
        @Body('systemId') systemId: string,
        @Body('active') active: string,
        @Body('displayName') displayName: string,
        @Body('role') role: string,
    ) {
        try {
            const isExists = await this.managerService.getManagerById(uid);

            if (!isExists) {
                return {
                    statusCode: 403,
                    message: ['user is not exists'],
                    error: 'Bad Request',
                };
            }

            return await this.managerService.updateManager(
                uid,
                userId,
                systemId,
                active,
                displayName,
                role,
            );
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    @Delete(':uid')
    async deleteManager(@Param('uid') uid: string) {
        try {
            return await this.managerService.deleteManager(uid);
        } catch (err) {
            console.log(err);
            return err;
        }
    }
}
