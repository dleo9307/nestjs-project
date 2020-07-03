import { Sequelize } from 'sequelize-typescript';
import { Book } from '../books/book.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mariadb',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'test',
        database: 'test',
        dialectOptions:{
          useUTC: false
        },
        define:{
          charset: "utf8"
        },
        timezone: "Asia/Seoul"
      });
      sequelize.addModels([Book]);
      await sequelize.sync();
      return sequelize;
    },
  },
];

