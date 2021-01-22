import { Module } from '@nestjs/common';
import { CarsModule } from 'src/cars/cars.module';
import { QuotesController } from './quotes.controller';
import { QuoteService } from './quotes.service';

@Module({
  imports: [CarsModule],
  controllers: [QuotesController],
  providers: [QuoteService],
})
export class QuotesModule {}
