import { Injectable, Logger } from '@nestjs/common';
import { PrismaClient, Users } from '@prisma/client';
import { UpdateUserDto } from './Dto/user.dto';

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
  updateUser(
    userId: number,
    user: { email?: string; name?: string; hashedPassword?: string },
  ) {
    console.log(user);
    return this.prisma.users.update({
      where: {
        id: userId,
      },
      data: {
        ...user,
        updatedAt: new Date(),
      },
    });
  }
}
