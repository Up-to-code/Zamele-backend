import prisma from '../models/prismaClient';
import { Question } from '@prisma/client';

export const createQuestion = (data: Omit<Question, 'id' | 'createdAt' | 'answers'>): Promise<Question> => prisma.question.create({ data });
export const getAllQuestions = (): Promise<Question[]> => prisma.question.findMany();
export const getQuestionById = (id: string): Promise<Question | null> => prisma.question.findUnique({ where: { id } });
export const updateQuestion = (id: string, data: Partial<Question>): Promise<Question> => prisma.question.update({ where: { id }, data });
export const deleteQuestion = (id: string): Promise<Question> => prisma.question.delete({ where: { id } }); 