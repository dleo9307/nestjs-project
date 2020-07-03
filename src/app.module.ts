import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { BooksModule } from './books/books.module';
import { GraphQLFederationModule } from '@nestjs/graphql';

@Module({
  imports: [
    DatabaseModule,
    BooksModule,
    GraphQLFederationModule.forRoot({
      debug: true,
      autoSchemaFile: 'schema.graphql',
      // installSubscriptionHandlers: true,
      playground: true,
    }),
  ],
})

export class AppModule {
}
