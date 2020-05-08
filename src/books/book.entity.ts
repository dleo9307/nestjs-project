import { Table, Column, Model, AllowNull, Default, AutoIncrement, PrimaryKey } from 'sequelize-typescript';


@Table({
  timestamps: false,
})
export class Book extends Model<Book> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
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
}

