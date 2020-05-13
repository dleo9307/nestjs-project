import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateBookDto } from './dto/update-book.dto';

@ApiTags('books')
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

  @Put(':id')
  update(@Param('id') id: number, @Body() updateData: UpdateBookDto): Promise<[number, Book[]]>{
    return this.booksService.update(id, updateData);
  }

  @Delete()
  async deleteAll(): Promise<Number> {
    return this.booksService.deleteAll();
  }
}
