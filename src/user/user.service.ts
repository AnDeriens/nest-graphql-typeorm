import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/User';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async getName(): Promise<string> {
    const user = await this.userRepository.findOne();
    return user.name;
  }

  async find(): Promise<User> {
    return await this.userRepository.findOne();
  }
}
