import prisma from '../models/prismaClient';

// TODO: Replace 'any' with 'Course' from @prisma/client after fixing Prisma client generation
export const createCourse = (data: any): Promise<any> => prisma.course.create({ data });
export const getAllCourses = (): Promise<any[]> => prisma.course.findMany();
export const getCourseById = (id: string): Promise<any | null> => prisma.course.findUnique({ where: { id } });
export const updateCourse = (id: string, data: any): Promise<any> => prisma.course.update({ where: { id }, data });
export const deleteCourse = (id: string): Promise<any> => prisma.course.delete({ where: { id } }); 