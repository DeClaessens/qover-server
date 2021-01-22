import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { CarsModule } from './cars/cars.module';
import { QuotesModule } from './quotes/quote.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    CarsModule,
    QuotesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
