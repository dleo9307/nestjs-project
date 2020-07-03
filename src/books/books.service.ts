import { Injectable, Inject } from '@nestjs/common';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {

  constructor(@Inject('BOOKS_REPOSITORY') private booksRepository: typeof Book) {
  }

  async findAll(): Promise<Book[]> {
    return this.booksRepository.findAll<Book>();
  }

  async findOne(id:number): Promise<Book> {
    return this.booksRepository.findByPk(id);
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
      },
      {
        'name': '열혈 c언어',
        'author': 'ku',
        'publisher': 'rich',
      },
      {
        'name': 'node.js',
        'author': 'kim',
        'publisher': 'haha',
      },
      {
        'name': 'test코드',
        'author': 'lim',
        'publisher': 'dudu',
      },
      {
        'name': '오리',
        'author': '꽥꽥',
        'publisher': '동물농장',
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
