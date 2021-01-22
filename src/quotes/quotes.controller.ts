import { Post, Body, Controller } from '@nestjs/common';
import { GetQuoteDTO, IQuoteResponse, InvalidQuote } from './quote.types';
import { QuoteService } from './quotes.service';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quoteService: QuoteService) {}
  @Post('/getQuote')
  getQuote(@Body() getQuoteDTO: GetQuoteDTO): Promise<IQuoteResponse> {
    return this.quoteService.getQuote(getQuoteDTO);
  }
}
