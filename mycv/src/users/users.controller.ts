import {
  Body,
  Get,
  Controller,
  Post,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { UserDTO } from './dtos/user.dto';

@Controller('auth')
@Serialize(UserDTO) // @UseInterceptors(new SerializeInterceptor(UserDTO))
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/signup')
  async create(@Body() body: CreateUserDTO) {
    const user = await this.userService.create(body.email, body.password);
    return user;
  }

  @Get('/:id')
  // @Serialize(UserDTO) // @UseInterceptors(new SerializeInterceptor(UserDTO))
  async findOne(@Param('id') id: string) {
    const user = await this.userService.findOne(parseInt(id));
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }
}
