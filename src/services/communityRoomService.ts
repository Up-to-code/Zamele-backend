import prisma from '../models/prismaClient';
import { CommunityRoom } from '@prisma/client';

export const createCommunityRoom = (data: Omit<CommunityRoom, 'id' | 'createdAt'>): Promise<CommunityRoom> => prisma.communityRoom.create({ data });
export const getAllCommunityRooms = (): Promise<CommunityRoom[]> => prisma.communityRoom.findMany();
export const getCommunityRoomById = (id: string): Promise<CommunityRoom | null> => prisma.communityRoom.findUnique({ where: { id } });
export const updateCommunityRoom = (id: string, data: Partial<CommunityRoom>): Promise<CommunityRoom> => prisma.communityRoom.update({ where: { id }, data });
export const deleteCommunityRoom = (id: string): Promise<CommunityRoom> => prisma.communityRoom.delete({ where: { id } }); 