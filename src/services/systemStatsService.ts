import prisma from '../models/prismaClient';

// TODO: Replace 'any' with 'SystemStats' from @prisma/client after fixing Prisma client generation
export const createSystemStats = (data: any): Promise<any> => prisma.systemStats.create({ data });
export const getAllSystemStats = (): Promise<any[]> => prisma.systemStats.findMany();
export const getSystemStatsById = (id: string): Promise<any | null> => prisma.systemStats.findUnique({ where: { id } });
export const updateSystemStats = (id: string, data: any): Promise<any> => prisma.systemStats.update({ where: { id }, data });
export const deleteSystemStats = (id: string): Promise<any> => prisma.systemStats.delete({ where: { id } }); 