import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { booksProviders } from './books.providers';
import { BooksController } from './books.controller';

@Module({
  controllers: [BooksController],
  providers: [
    BooksService,
    ...booksProviders,
  ],
})


export class BooksModule {}
