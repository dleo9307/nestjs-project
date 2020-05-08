import { Module } from '@nestjs/common';
import { BookStoreService } from './bookStore.service';
import { bookStoreProviders } from './bookStore.providers';
import { BookStoreController } from './bookStore.controller';

@Module({
  controllers: [BookStoreController],
  providers: [
    BookStoreService,
    ...bookStoreProviders,
  ],
})


export class BookStoreModule {}
