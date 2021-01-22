import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from './cars.schema';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}
  @Get()
  findAll(): Promise<Car[]> {
    return this.carsService.findAll();
  }
  @Get(':id')
  find(@Param() params): Promise<Car> {
    const { id } = params;
    // fetch car
    return this.carsService.findById(id);
  }
}
