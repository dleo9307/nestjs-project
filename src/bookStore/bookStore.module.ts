import { Module } from '@nestjs/common';
import { BookStoreService } from './bookStore.service';
import { bookStoreProviders } from './bookStore.providers';
import { BookStoreController } from './bookStore.controller';
import { BookStoreResolver } from './bookStore.resolver';

@Module({
  controllers: [BookStoreController],
  providers: [
    BookStoreService,
    BookStoreResolver,
    ...bookStoreProviders,
  ],
})


export class BookStoreModule {}
