import { Query, Resolver } from "@nestjs/graphql";
import { User } from "src/entity/User";
import { UserService } from "src/user/user.service";

@Resolver()
export class UserResolver {
  constructor(
    private readonly userService: UserService
  ) {}

  @Query(() => User)
  async user(): Promise<User> {
    return await this.userService.find();
  }
}