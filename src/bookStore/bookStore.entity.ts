import { Table, Column, Model, AllowNull, AutoIncrement, PrimaryKey } from 'sequelize-typescript';


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
}

