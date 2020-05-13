import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookStoreService } from './bookStore.service';
import { BookStore } from './bookStore.entity';
import { ApiTags } from '@nestjs/swagger';
import { CreateBookStoreDto } from './dto/create-bookStore.dto';

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

}
