/* eslint-disable prettier/prettier */
// // import {
// //     Controller,
// //     Get
// // } from '@nestjs/common';
// // // import * as common from '@nestjs/common';
// // import { SendGridService } from './sendgrid.service';

// // @Controller('sendGrid')
// // export class SendGridController {
// //     constructor(private sendGridService: SendGridService) { }

// //     @Get()
// //     async getSystemsOfAdmin() {
// //         return await this.sendGridService.sendEmail();
// //     }
// // }


// /* eslint-disable prettier/prettier */
// import {
//     Body,
//     Controller,
//     Delete,
//     Get,
//     Param,
//     Post,
//     Put,
// } from '@nestjs/common';
// import { SendGridService } from './sendGrid.service';

// @Controller('sendGrid')
// export class SendGridController {
//     constructor(private sendGridService: SendGridService) { }

//     @Get()
//     async getAll() {
//         try {
//             return await this.sendGridService.sendEmail();
//         } catch (err) {
//             console.log(err);
//             return err;
//         }
//     }

//     // @Get(':_id')
//     // async getMarkerById(@Param('_id') _id: string) {
//     //     try {
//     //         return await this.sendGridService.getMarkerById(_id);
//     //     } catch (err) {
//     //         console.log(err);
//     //         return err;
//     //     }
//     // }

//     // @Get('systemsMarkers/:systemUid')
//     // async getMarkersOfSystem(@Param('systemUid') systemUid: string) {
//     //     return await this.sendGridService.getMarkersOfSystem(systemUid);
//     // }

//     // @Post()
//     // async createMarker(
//     //     @Body('manager_id') manager_id: string,
//     //     @Body('system_id') system_id: string,
//     //     @Body('locationGeolocation') locationGeolocation: object,
//     //     @Body('description') description: string,
//     //     @Body('name') name: string,
//     //     @Body('notes') notes: string,
//     //     @Body('communicationDetails') communicationDetails: object,
//     // ) {
//     //     try {
//     //         return await this.sendGridService.AddMarker(
//     //             manager_id,
//     //             system_id,
//     //             locationGeolocation,
//     //             description,
//     //             name,
//     //             notes,
//     //             communicationDetails,
//     //         );
//     //     } catch (err) {
//     //         console.log(err);
//     //         return err;
//     //     }
//     // }

//     // @Put(':_id')
//     // async updateMarker(
//     //     @Param('_id') _id: string,
//     //     @Body('manager_id') manager_id: string,
//     //     @Body('system_id') system_id: string,
//     //     @Body('locationGeolocation') locationGeolocation: object,
//     //     @Body('description') description: string,
//     //     @Body('name') name: string,
//     //     @Body('notes') notes: string,
//     //     @Body('communicationDetails') communicationDetails: object,
//     // ) {
//     //     try {
//     //         const isExists = await this.sendGridService.getMarkerById(_id);

//     //         if (!isExists) {
//     //             return {
//     //                 statusCode: 403,
//     //                 message: ['user is not exists'],
//     //                 error: 'Bad Request',
//     //             };
//     //         }

//     //         return await this.sendGridService.updateMarker(
//     //             _id,
//     //             manager_id,
//     //             system_id,
//     //             locationGeolocation,
//     //             description,
//     //             name,
//     //             notes,
//     //             communicationDetails,
//     //         );
//     //     } catch (err) {
//     //         console.log(err);
//     //         return err;
//     //     }
//     // }

//     // @Delete(':_id')
//     // async deleteMarker(@Param('_id') _id: string) {
//     //     try {
//     //         return await this.sendGridService.deleteMarker(_id);
//     //     } catch (err) {
//     //         console.log(err);
//     //         return err;
//     //     }
//     // }
// }


import { Controller, Post, Query } from '@nestjs/common';
import { SendgridService } from './sendGrid.service';

@Controller('mail')
export class MailController {
  constructor(private sendgridService: SendgridService) {}

  // Here we use query parameter to get the email that we want to send
  @Post('send-email')
  async sendEmail(@Query('email') email) {
    console.log(email);
    const mail = {
      to: email,
      subject: 'Hello from sendgrid',
      from: 'r9743740@gmail.com', // Fill it with your validated email on SendGrid account
      text: 'Hello',
      html: '<h1>Hello</h1>',
    };

    return await this.sendgridService.send(mail);
  }
}