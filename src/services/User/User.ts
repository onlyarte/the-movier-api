import { PrismaClient } from '@prisma/client';

class UserService {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  get(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      select: { password: false },
    });
  }
}

export default UserService;