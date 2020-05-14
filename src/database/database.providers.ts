import { Sequelize } from 'sequelize-typescript';
import { Book } from '../books/book.entity';
import { BookStore } from '../bookStore/bookStore.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'test',
        database: 'test',
      });
      sequelize.addModels([Book, BookStore]);
      await sequelize.sync();
      return sequelize;
    },
  },
];

