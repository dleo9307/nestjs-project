import { Field, InputType, Int } from '@nestjs/graphql';


@InputType()
export class CreateBookArgs {
  @Field()
  readonly name: string;


  @Field()
  readonly author: string;


  @Field()
  readonly publisher: string;


  @Field(returns => Int, {nullable:true})
  readonly count: number;

}
