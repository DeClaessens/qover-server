import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { Car, CarSchema } from './cars.schema';

const CarModel = MongooseModule.forFeature([
  { name: Car.name, schema: CarSchema },
]);
@Module({
  imports: [CarModel],
  controllers: [CarsController],
  providers: [CarsService],
  exports: [CarsService, CarModel],
})
export class CarsModule {}
