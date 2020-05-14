import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookStoreDto {
  @ApiProperty({required:false})
  readonly name: string;

  @ApiProperty({required:false})
  readonly location: string;
}
