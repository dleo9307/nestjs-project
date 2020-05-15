import {
  Table,
  Column,
  Model,
  AllowNull,
  Default,
  AutoIncrement,
  PrimaryKey,
  ForeignKey,
  BelongsTo, Unique,
} from 'sequelize-typescript';
import { BookStore } from '../bookStore/bookStore.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Table({
  timestamps: false,
})
@ObjectType()
export class Book extends Model<Book> {
  @PrimaryKey
  @AutoIncrement
  @Column
  @Field(type => Int)
  id: number;

  @AllowNull(false)
  @Unique
  @Column
  @Field()
  name: string;

  @AllowNull(false)
  @Column
  @Field()
  author: string;

  @AllowNull(false)
  @Column
  @Field()
  publisher: string;

  @Default(0)
  @Column
  @Field(type => Int, {nullable: true})
  count: number;

  @AllowNull(false)
  @ForeignKey(() => BookStore)
  @Column
  @Field(type => Int, {nullable: false})
  bookStore_id: number;

  @BelongsTo(() => BookStore)
  @Field( type => BookStore)
  bookStore: BookStore;

}

