import { Book } from './book.entity';
import { Query, Resolver } from '@nestjs/graphql';
import { BooksService } from './books.service';

@Resolver(of => Book)
export class BooksResolver {
  constructor(private booksService: BooksService) {
  }

  @Query(returns => [Book])
  async books(){
    return this.booksService.findAll();
  }
}

