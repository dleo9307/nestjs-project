import { ApiProperty } from '@nestjs/swagger';
import { Field, InputType, Int } from '@nestjs/graphql';


@InputType()
export class CreateBookDto {
  @ApiProperty({required:true})
  @Field()
  readonly name: string;

  @ApiProperty({required:true})
  @Field()
  readonly author: string;

  @ApiProperty({required:true})
  @Field()
  readonly publisher: string;

  @ApiProperty()
  @Field(returns => Int, {nullable:true})
  readonly count: number;

}
