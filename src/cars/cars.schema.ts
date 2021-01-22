import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CarDocument = Car & Document;

@Schema()
export class Car {
  @Prop()
  brand: string;

  @Prop()
  insuranceCost: number;

  @Prop()
  universalPercentageOfCost: number;

  @Prop({ required: false })
  minAge?: number;
}

export const CarSchema = SchemaFactory.createForClass(Car);
