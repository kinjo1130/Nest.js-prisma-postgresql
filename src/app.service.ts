import { Injectable, Logger } from '@nestjs/common';
import { PrismaClient, Users } from '@prisma/client';

@Injectable()
export class AppService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  getHello(): string {
    return 'Hello World!';
  }
  getUsers(): Promise<Users[]> {
    return this.prisma.users.findMany();
  }
  addUser(user: Users) {
    const res = this.prisma.users.create({ data: user });
    Logger.log(res);
    return res;
  }
  updateUser(userId: number, user: Users) {
    return this.prisma.users.update({
      where: {
        id: userId,
      },
      data: user,
    });
  }
}
