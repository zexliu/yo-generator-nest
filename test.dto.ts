import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTestInput {
  @Field(() => String, { description: '角色名称' })
  some: string;

}
@InputType()
export class UpdateTestInput {
  @Field(() => String, { description: '角色名称' })
  some: string;
}
