import {
    Resolver,
    Query,
    Args,
    Mutation,
    Context,
  } from '@nestjs/graphql';
  import { UseGuards } from '@nestjs/common';
  import { AuthGuard } from '../../../shared/guards/auth.guard';
  import { UserService } from '../../../shared/services/user.service';
  import { User } from '../../../db/entities';
  import { UserCreateInput, LoginInput } from '../../../shared/types';
  @Resolver()
  export class UserResolver {
    constructor(
      private userService: UserService,
    ) {}
  
    @Query()
    @UseGuards(new AuthGuard())
    async whoami(@Context('user') user) {
      const { email } = user;
      return User.findOne({email});
    }
  
    @Query()
    async login(
      @Args('input') input: LoginInput
    ) {
      return await this.userService.login(input.email, input.password);
    }
  
    @Mutation()
    async userCreate(@Args('input') input: UserCreateInput){
      const user = await this.userService.create({
        email: input.email,
        password: input.password,
        firstName: input.firstName,
        lastName: input.lastName,
      });

      return {user};
    }
  }
  