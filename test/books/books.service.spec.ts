import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from '../../src/books/books.service';

class BooksServiceMock {
  findAll(){
    return [];
  }
}

describe('booksService', () => {
  let app: TestingModule;
  let booksService: BooksService;

  beforeAll(async () =>{
    const BooksServiceProvider = {
      providers: BooksService,
      useClass: BooksServiceMock,
    }
    app = await Test.createTestingModule({
      providers: [BooksService]
    }).compile()
  });
  booksService = app.get<BooksService>(BooksService);
});
