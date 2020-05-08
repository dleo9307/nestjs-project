import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { BookStoreService } from './bookStore.service';
import { bookStoreProviders } from './bookStore.providers';
import { BookStoreController } from './bookStore.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [BookStoreController],
  providers: [
    BookStoreService,
    ...bookStoreProviders,
  ],
})


export class BookStoreModule {}
