import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { BooksService } from './books.service';
import { booksProviders } from './books.providers';
import { BooksController } from './books.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [BooksController],
  providers: [
    BooksService,
    ...booksProviders,
  ],
})


export class BooksModule {}
