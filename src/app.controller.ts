import { Body, Controller, Get, Logger, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Users } from '@prisma/client';

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
  updateUser(@Body() userId: number, user: Users) {
    return this.appService.updateUser(userId, user);
  }
}
