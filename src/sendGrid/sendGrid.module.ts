/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MailController } from './sendGrid.controller';
import { SendGridSchema } from './sendGrid.model';
import { SendgridService } from './sendGrid.service';
 
@Module({
  imports: [MongooseModule.forFeature([{ name: 'SendGrid', schema: SendGridSchema }])],
  controllers: [MailController],
  providers: [SendgridService],
})
export class SendGridModule {}
