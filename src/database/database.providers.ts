import { Sequelize } from 'sequelize-typescript';
import { Book } from '../books/book.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'test',
      });
      sequelize.addModels([Book]);
      await sequelize.sync();
      return sequelize;
    },
  },
];

