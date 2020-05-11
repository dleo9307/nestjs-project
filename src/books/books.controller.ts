import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {
  }

  @Get()
  async findAll(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Post()
  async create(@Body() bookData: CreateBookDto): Promise<Book> {
    return this.booksService.create(bookData);
  }

  @Post('dummy')
  async pushDummy(): Promise<Book[]> {
    return this.booksService.pushDummy();
  }

  @Delete()
  async deleteAll(): Promise<Number> {
    return this.booksService.deleteAll();
  }
}
