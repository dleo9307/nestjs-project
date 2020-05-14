import { ApiProperty } from '@nestjs/swagger';
import { BookStore } from '../../bookStore/bookStore.entity';

export class UpdateBookDto {
  @ApiProperty({required:false})
  readonly name: string;

  @ApiProperty({required:false})
  readonly author: string;

  @ApiProperty({required:false})
  readonly publisher: string;

  @ApiProperty({required:false})
  readonly count: number;

  @ApiProperty({required:false})
  readonly bookStore_id: number;
}
