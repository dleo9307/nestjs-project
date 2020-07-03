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
import { Directive, Field, Int, ObjectType } from '@nestjs/graphql';

@Table({
  timestamps: false,
})

@ObjectType()
@Directive('@key(fields: "id")')
@Directive('@key(fields: "name")')
@Directive('@key(fields: "author")')
@Directive('@key(fields: "publisher")')
@Directive('@key(fields: "count")')
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
}

