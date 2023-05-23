import { Body, Controller, Post } from '@nestjs/common';
import { get } from 'http';
import { CreateUserDto } from './dtos/createuser.dto';

@Controller('user')
export class UserController {
  @Post()
  async createUser(@Body() createUser: CreateUserDto) {
    return createUser;
  }
}
