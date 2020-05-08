import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { BooksModule } from './books/books.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
})

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: './conf/config.env',
    ignoreEnvFile: true,
  })],
})

@Module({
  imports: [DatabaseModule, BooksModule]
})

export class AppModule {
}
