import { Book } from './book.entity';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { CreateBookArgs } from './dto/create-book.args';
import { UpdateBookArgs } from './dto/update-book.args';
import { type } from 'os';

@Resolver(of => Book)
export class BooksResolver {
  constructor(private booksService: BooksService) {
  }

  @Query(returns => [Book])
  async books() {
    return this.booksService.findAll();
  }

  @Mutation(returns => Book)
  async createBook(@Args('input') input: CreateBookArgs) {
    return this.booksService.create(input);
  }

  @Mutation(returns => [Int])
  async updateBook(@Args('bookId', {type: () =>Int}) bookId: number,
                   @Args('input') input: UpdateBookArgs) {
    return this.booksService.update(bookId, input);
  }

  @Mutation(returns => Boolean)
  async deleteBook(@Args('bookId', {type: () =>Int}) bookId: number){
    return this.booksService.deleteById(bookId);
  }

  @Mutation(returns => Int)
  async deleteAllBook(){
    return this.booksService.deleteAll();
  }
}

