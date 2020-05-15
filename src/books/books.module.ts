import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { booksProviders } from './books.providers';
import { BooksController } from './books.controller';
import { BooksResolver } from './books.resolver';

@Module({
  controllers: [BooksController],
  providers: [
    BooksService,
    BooksResolver,
    ...booksProviders,
  ],
})


export class BooksModule {}
