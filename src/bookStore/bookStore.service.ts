import { Injectable, Inject } from '@nestjs/common';
import { BookStore } from './bookStore.entity';
import { CreateBookStoreDto } from './dto/create-bookStore.dto';

@Injectable()
export class BookStoreService {

  constructor(@Inject('BOOKSTORE_REPOSITORY') private booksRepository: typeof BookStore) {
  }

  async findAll(): Promise<BookStore[]>{
    return this.booksRepository.findAll<BookStore>();
  }


  async create(createBookStoreDto: CreateBookStoreDto): Promise<BookStore> {
    return this.booksRepository.create(createBookStoreDto);
  }
}
