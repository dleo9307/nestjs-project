import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from '../../src/books/books.service';
import { BooksController } from '../../src/books/books.controller';


describe('booksController', () => {
  let booksService: BooksService;
  let booksController: BooksController;


  beforeEach(async () => {
    const moduleRef:TestingModule = await Test.createTestingModule({
      controllers:[BooksController],
      providers: [BooksService],
    }).compile();
    booksController = moduleRef.get<BooksController>(BooksController);
    booksService = moduleRef.get<BooksService>(BooksService);
  });

  describe('findAll', () => {
    it('should return an array of books', async () => {
      const result: any = [];
      jest.spyOn(booksService, 'findAll').mockImplementation(() => result);
      //console.log('result : ', await booksService.findAll());
      expect(await booksController.findAll()).toBe([]);
    });
  });

});
