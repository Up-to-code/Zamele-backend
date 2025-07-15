import prisma from './prismaClient';

export async function createUser(email: string, name?: string) {
  return prisma.user.create({
    data: { email, name },
  });
} 