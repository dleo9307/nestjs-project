import { BookStore } from './bookStore.entity';

export const bookStoreProviders = [
  {
    provide: 'BOOKSTORE_REPOSITORY',
    useValue: BookStore
  }
]
