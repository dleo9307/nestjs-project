import { ApiProperty } from '@nestjs/swagger';

export class CreateBookStoreDto {
  @ApiProperty({required:true})
  readonly name: string;

  @ApiProperty({required:true})
  readonly location: string;
}
