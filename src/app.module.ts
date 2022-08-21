/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SystemModule } from './system/system.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Ron:vCYuIhUCuPxa79rK@teat-nestjs.z5gnevy.mongodb.net/RR-final-project?retryWrites=true&w=majority',
    ),
    UserModule,
    SystemModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
