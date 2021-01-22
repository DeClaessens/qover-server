import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Car, CarDocument } from './cars.schema';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Car.name) private carModel: Model<CarDocument>) {}

  async findAll(): Promise<Car[]> {
    return this.carModel.find().exec();
  }

  async findById(id: string): Promise<Car> {
    console.log({ id });
    return await this.carModel.findById(Types.ObjectId(id)).exec();
  }
}
