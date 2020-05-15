import { ApiProperty } from '@nestjs/swagger';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateBookArgs {
  @Field({nullable:true})
  readonly name: string;

  @Field({nullable:true})
  readonly author: string;

  @Field({nullable:true})
  readonly publisher: string;

  @Field(returns => Int, {nullable:true})
  readonly count: number;

  @Field(returns => Int, {nullable:true})
  readonly bookStore_id: number;
}
