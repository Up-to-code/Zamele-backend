import prisma from '../models/prismaClient';
// import { Comment } from '@prisma/client';

// TODO: Replace 'any' with 'Comment' from @prisma/client after fixing Prisma client generation
export const createComment = (data: any): Promise<any> => prisma.comment.create({ data });
export const getAllComments = (): Promise<any[]> => prisma.comment.findMany();
export const getCommentById = (id: string): Promise<any | null> => prisma.comment.findUnique({ where: { id } });
export const updateComment = (id: string, data: any): Promise<any> => prisma.comment.update({ where: { id }, data });
export const deleteComment = (id: string): Promise<any> => prisma.comment.delete({ where: { id } }); 