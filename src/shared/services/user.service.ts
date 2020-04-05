import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { User } from '../../db/entities/user.entity';
import { UserCreateData } from '../types';
@Injectable()
export class UserService {
  async read(email: string) {
    const user = await User.findOne({
      where: { email },
    });
    return user;
  }

  async login(email: string, password: string) {
    const user = await User.findOne({ where: { email } });
    if (!user || !(await user.comparePassword(password))) {
      throw new HttpException(
        'Invalid email/password',
        HttpStatus.BAD_REQUEST,
      );
    }
    return {
      token: user.token,
      type: 'Bearer'
    };
  }

  async create(data: UserCreateData) {
    const { email } = data;
    let user: any = await User.findOne({ where: { email } });
    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    user = User.create(data);
    await user.save();
    return user
  }
}
