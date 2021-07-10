import { Controller, Get } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { AppService } from './app.service';
import { User } from './entity/User';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    return this.userService.getName();
  }
}
