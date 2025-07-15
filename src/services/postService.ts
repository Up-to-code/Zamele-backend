import prisma from '../models/prismaClient';
import { Post } from '@prisma/client';

export const createPost = (data: Omit<Post, 'id' | 'createdAt'>): Promise<Post> => prisma.post.create({ data });
export const getAllPosts = (): Promise<Post[]> => prisma.post.findMany();
export const getPostById = (id: string): Promise<Post | null> => prisma.post.findUnique({ where: { id } });
export const updatePost = (id: string, data: Partial<Post>): Promise<Post> => prisma.post.update({ where: { id }, data });
export const deletePost = (id: string): Promise<Post> => prisma.post.delete({ where: { id } }); 