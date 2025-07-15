import prisma from '../models/prismaClient';
import { Community } from '@prisma/client';

export const createCommunity = (data: Omit<Community, 'id' | 'createdAt'>): Promise<Community> => prisma.community.create({ data });
export const getAllCommunities = (): Promise<Community[]> => prisma.community.findMany();
export const getCommunityById = (id: string): Promise<Community | null> => prisma.community.findUnique({ where: { id } });
export const updateCommunity = (id: string, data: Partial<Community>): Promise<Community> => prisma.community.update({ where: { id }, data });
export const deleteCommunity = (id: string): Promise<Community> => prisma.community.delete({ where: { id } }); 