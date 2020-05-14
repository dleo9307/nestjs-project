import { ApiProperty } from '@nestjs/swagger';
import { BookStore } from '../../bookStore/bookStore.entity';

export class CreateBookDto {
  @ApiProperty({required:true})
  readonly name: string;

  @ApiProperty({required:true})
  readonly author: string;

  @ApiProperty({required:true})
  readonly publisher: string;

  @ApiProperty()
  readonly count: number;

  @ApiProperty({required:false})
  readonly bookStore_id: number;
}
