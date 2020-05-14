import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookStoreService } from './bookStore.service';
import { BookStore } from './bookStore.entity';
import { ApiTags } from '@nestjs/swagger';
import { CreateBookStoreDto } from './dto/create-bookStore.dto';
import { UpdateBookStoreDto } from './dto/update-bookStore.dto';

@ApiTags('bookStore')
@Controller('bookStore')
export class BookStoreController {
  constructor(private bookStoreService: BookStoreService) {
  }

  @Get()
  async findAll(): Promise<BookStore[]> {
    return this.bookStoreService.findAll();
  }

  @Post()
  async create(@Body() createBookStoreDto: CreateBookStoreDto): Promise<BookStore> {
    return this.bookStoreService.create(createBookStoreDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateData: UpdateBookStoreDto): Promise<[number, BookStore[]]> {
    return this.bookStoreService.update(id, updateData);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: number): Promise<void> {
    return this.bookStoreService.deleteById(id);
  }
}
