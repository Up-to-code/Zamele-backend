import prisma from '../models/prismaClient';

// TODO: Replace 'any' with 'LeaderboardEntry' from @prisma/client after fixing Prisma client generation
export const createLeaderboardEntry = (data: any): Promise<any> => prisma.leaderboardEntry.create({ data });
export const getAllLeaderboardEntries = (): Promise<any[]> => prisma.leaderboardEntry.findMany();
export const getLeaderboardEntryById = (id: string): Promise<any | null> => prisma.leaderboardEntry.findUnique({ where: { id } });
export const updateLeaderboardEntry = (id: string, data: any): Promise<any> => prisma.leaderboardEntry.update({ where: { id }, data });
export const deleteLeaderboardEntry = (id: string): Promise<any> => prisma.leaderboardEntry.delete({ where: { id } }); 