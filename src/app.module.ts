import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { BooksModule } from './books/books.module';
import { BookStoreModule } from './bookStore/bookStore.module';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLUpload } from 'graphql-tools';

@Module({
  imports: [
    DatabaseModule,
    BooksModule,
    BookStoreModule,
    GraphQLModule.forRoot({
      debug: true,
      autoSchemaFile: 'schema.graphql',
      installSubscriptionHandlers: true,
      playground: true,
    }),
  ],
})

export class AppModule {
}
