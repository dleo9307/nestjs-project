import { Controller, Get } from '@nestjs/common';
import { BookStoreService } from './bookStore.service';
import { BookStore } from './bookStore.entity';

@Controller('bookStore')
export class BookStoreController {
  constructor(private bookStoreService : BookStoreService) {
  }

  @Get()
  async findAll(): Promise<BookStore[]>{
    return this.bookStoreService.findAll();
  }

}
