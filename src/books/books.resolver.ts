import { Book } from './book.entity';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';

@Resolver(of => Book)
export class BooksResolver {
  constructor(private booksService: BooksService) {
  }

  @Query(returns => [Book])
  async books(){
    return this.booksService.findAll();
  }

  @Mutation(returns => Book)
  async createBook(@Args('input') input: CreateBookDto){
    return this.booksService.create(input);
  }
}


