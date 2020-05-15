import { Injectable, Inject } from '@nestjs/common';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookStore } from '../bookStore/bookStore.entity';

@Injectable()
export class BooksService {

  constructor(@Inject('BOOKS_REPOSITORY') private booksRepository: typeof Book) {
  }

  async findAll(): Promise<Book[]> {
    return this.booksRepository.findAll<Book>({include:[BookStore]});
  }

  async create(dto: CreateBookDto): Promise<Book> {
    return this.booksRepository.create(dto);
  }

  async update(id: number, updateData: UpdateBookDto): Promise<[number, Book[]]> {
    return this.booksRepository.update(updateData, {where:{id}})
  }

  async pushDummy(): Promise<Book[]> {
    const dummy = [
      {
        'name': 'java의 정석',
        'author': 'lee',
        'publisher': 'oracle',
        'bookStore_id': 1
      },
      {
        'name': '열혈 c언어',
        'author': 'ku',
        'publisher': 'rich',
        'bookStore_id': 1
      },
      {
        'name': 'node.js',
        'author': 'kim',
        'publisher': 'haha',
        'bookStore_id': 1
      },
      {
        'name': 'test코드',
        'author': 'lim',
        'publisher': 'dudu',
        'bookStore_id': 1
      },
      {
        'name': '오리',
        'author': '꽥꽥',
        'publisher': '동물농장',
        'bookStore_id': 1
      }];
    return this.booksRepository.bulkCreate(dummy);
  }

  async deleteById(id: number): Promise<Boolean> {
    const deleteObj = await this.booksRepository.findByPk(id);

    if(!deleteObj){
      return false;
    }
    deleteObj.destroy();
    return true;
  }

  async deleteAll(): Promise<number> {
    return this.booksRepository.destroy({truncate:true})
  }
}
