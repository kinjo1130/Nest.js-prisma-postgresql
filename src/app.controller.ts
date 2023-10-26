import { Body, Controller, Get, Logger, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Users } from '@prisma/client';
import { UpdateUserDto } from './Dto/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('users')
  getUsers() {
    return this.appService.getUsers();
  }
  @Post('user')
  postUsers(@Body() user: Users) {
    Logger.log(user);
    return this.appService.addUser(user);
  }
  @Patch('user')
  updateUser(@Body() updateUser: UpdateUserDto) {
    console.log(updateUser);
    return this.appService.updateUser(updateUser.userId, updateUser.user);
  }
}
