import { Table, Column, Model, AllowNull, AutoIncrement, PrimaryKey, HasMany } from 'sequelize-typescript';
import { Book } from '../books/book.entity';


@Table({
  timestamps: false,
})
export class BookStore extends Model<BookStore> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column
  location: string;

  @HasMany(() => Book)
  books: Book[];
}

