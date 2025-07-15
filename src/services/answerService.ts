import prisma from '../models/prismaClient';
import { Answer } from '@prisma/client';

export const createAnswer = (data: Omit<Answer, 'id' | 'createdAt'>): Promise<Answer> => prisma.answer.create({ data });
export const getAllAnswers = (): Promise<Answer[]> => prisma.answer.findMany();
export const getAnswerById = (id: string): Promise<Answer | null> => prisma.answer.findUnique({ where: { id } });
export const updateAnswer = (id: string, data: Partial<Answer>): Promise<Answer> => prisma.answer.update({ where: { id }, data });
export const deleteAnswer = (id: string): Promise<Answer> => prisma.answer.delete({ where: { id } }); 