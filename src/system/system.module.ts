/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SystemController } from './system.controller';
import { SystemSchema } from './system.model';
import { SystemService } from './system.service';
import { PreauthMiddleware } from '../auth/preauth.middleware';
import { AddSystemMiddleware } from '../auth/addSystem.middleware';
import { SystemMiddleware } from '../auth/system.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'System', schema: SystemSchema }]),
  ],
  controllers: [SystemController],
  providers: [SystemService],
})

export class SystemModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SystemMiddleware).forRoutes({
      path: 'system/:_id', method: RequestMethod.ALL,
    });
    consumer.apply(PreauthMiddleware).forRoutes({
      path: 'system', method: RequestMethod.GET,
    });
    consumer.apply(AddSystemMiddleware).forRoutes({
      path: 'system', method: RequestMethod.POST,
    });
  }
}

