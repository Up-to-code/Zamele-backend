import prisma from '../models/prismaClient';

// TODO: Replace 'any' with 'News' from @prisma/client after fixing Prisma client generation
export const createNews = (data: any): Promise<any> => prisma.news.create({ data });
export const getAllNews = (): Promise<any[]> => prisma.news.findMany();
export const getNewsById = (id: string): Promise<any | null> => prisma.news.findUnique({ where: { id } });
export const updateNews = (id: string, data: any): Promise<any> => prisma.news.update({ where: { id }, data });
export const deleteNews = (id: string): Promise<any> => prisma.news.delete({ where: { id } }); 