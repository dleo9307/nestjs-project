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


@Table({
  timestamps: false,
})
export class Book extends Model<Book> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Unique
  @Column
  name: string;

  @AllowNull(false)
  @Column
  author: string;

  @AllowNull(false)
  @Column
  publisher: string;

  @Default(0)
  @Column
  count: number;

  @ForeignKey(()=> BookStore)
  @Column
  bookStore_id: number;

  @BelongsTo(() => BookStore)
  bookStore: BookStore;

}

