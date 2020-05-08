import { Injectable, Inject } from '@nestjs/common';
import { BookStore } from './bookStore.entity';

@Injectable()
export class BookStoreService {

  constructor(@Inject('BOOKSTORE_REPOSITORY') private booksRepository: typeof BookStore) {
  }

  async findAll(): Promise<BookStore[]>{
    return this.booksRepository.findAll<BookStore>();
  }
}
