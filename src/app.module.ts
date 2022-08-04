import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Ron:vCYuIhUCuPxa79rK@teat-nestjs.z5gnevy.mongodb.net/RR-final-project?retryWrites=true&w=majority',
    ),
    UserModule,
  ],
})
export class AppModule {}
