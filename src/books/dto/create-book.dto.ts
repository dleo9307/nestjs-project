import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({required:true})
  readonly name: string;

  @ApiProperty({required:true})
  readonly author: string;

  @ApiProperty({required:true})
  readonly publisher: string;

  @ApiProperty()
  readonly count: number;
}
