/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MarkerController } from './marker.controller';
import { MarkerSchema } from './marker.model';
import { MarkerService } from './marker.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Marker', schema: MarkerSchema }])],
  controllers: [MarkerController],
  providers: [MarkerService],
})
export class MarkerModule {}
