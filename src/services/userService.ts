import prisma from '../models/prismaClient';
import { User } from '@prisma/client';

export const createUser = (data: Omit<User, 'id' | 'createdAt' | 'LeaderboardEntry'>): Promise<User> => prisma.user.create({ data });
export const getAllUsers = (): Promise<User[]> => prisma.user.findMany();
export const getUserById = (id: string): Promise<User | null> => prisma.user.findUnique({ where: { id } });
export const updateUser = (id: string, data: Partial<User>): Promise<User> => prisma.user.update({ where: { id }, data });
export const deleteUser = (id: string): Promise<User> => prisma.user.delete({ where: { id } }); 