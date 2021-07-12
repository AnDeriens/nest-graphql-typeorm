import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class UserResolver {

  @Query(() => String)
  user(): string {
    return 'user';
  }
}