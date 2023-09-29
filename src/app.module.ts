import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypegooseModule } from '@m8a/nestjs-typegoose';
import { Cat } from './cat.model';

@Module({
  imports: [
    TypegooseModule.forRoot(
      'mongodb://typegooseNest:typegooseNest@localhost:27017/typegoose-nest?authSource=typegoose-nest',
    ),
    TypegooseModule.forFeature([Cat]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
