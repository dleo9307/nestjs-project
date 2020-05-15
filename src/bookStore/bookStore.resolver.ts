import { Query, Resolver } from '@nestjs/graphql';
import { BookStoreService } from './bookStore.service';
import { BookStore } from './bookStore.entity';

@Resolver(of => BookStore)
export class BookStoreResolver {
  constructor(private bookStoreService: BookStoreService) {
  }

  @Query(returns => [BookStore])
  async bookStore(){
    return this.bookStoreService.findAll();
  }
}

