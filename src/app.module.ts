import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { BooksModule } from './books/books.module';
import { BookStoreModule } from './bookStore/bookStore.module';

@Module({
  imports: [DatabaseModule, BooksModule, BookStoreModule],
})


export class AppModule {
}
