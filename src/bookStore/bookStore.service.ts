import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { BookStore } from './bookStore.entity';
import { CreateBookStoreDto } from './dto/create-bookStore.dto';
import { UpdateBookStoreDto } from './dto/update-bookStore.dto';
import { Book } from '../books/book.entity';

@Injectable()
export class BookStoreService {

  constructor(@Inject('BOOKSTORE_REPOSITORY') private bookStoreRepository: typeof BookStore) {
  }

  async findAll(): Promise<BookStore[]>{
    return this.bookStoreRepository.findAll<BookStore>({include:[Book]});
  }

  async create(createBookStoreDto: CreateBookStoreDto): Promise<BookStore> {
    return this.bookStoreRepository.create(createBookStoreDto);
  }

  async update(id: number, updateData: UpdateBookStoreDto): Promise<[number, BookStore[]]> {
    return this.bookStoreRepository.update(updateData, {where:{id}})
  }

  async deleteById(id: number){
    const deleteData = await this.bookStoreRepository.findByPk(id);
    return deleteData.destroy();
  }
}
