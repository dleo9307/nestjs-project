import { Table, Column, Model, AllowNull, AutoIncrement, PrimaryKey, HasMany } from 'sequelize-typescript';
import { Book } from '../books/book.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';


@Table({
  timestamps: false,
})
@ObjectType()
export class BookStore extends Model<BookStore> {
  @PrimaryKey
  @AutoIncrement
  @Column
  @Field(type => Int)
  id: number;

  @AllowNull(false)
  @Column
  @Field()
  name: string;

  @AllowNull(false)
  @Column
  @Field()
  location: string;

  @HasMany(() => Book)
  @Field(type => [Book])
  books: Book[];
}

