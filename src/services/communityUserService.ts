import prisma from '../models/prismaClient';

// TODO: Replace 'any' with 'CommunityUser' from @prisma/client after fixing Prisma client generation
export const createCommunityUser = (data: any): Promise<any> => prisma.communityUser.create({ data });
export const getAllCommunityUsers = (): Promise<any[]> => prisma.communityUser.findMany();
export const getCommunityUserById = (id: string): Promise<any | null> => prisma.communityUser.findUnique({ where: { id } });
export const updateCommunityUser = (id: string, data: any): Promise<any> => prisma.communityUser.update({ where: { id }, data });
export const deleteCommunityUser = (id: string): Promise<any> => prisma.communityUser.delete({ where: { id } }); 