import prisma from '../models/prismaClient';
import { Campaign } from '@prisma/client';

export const createCampaign = (data: Omit<Campaign, 'id' | 'createdAt'>): Promise<Campaign> => prisma.campaign.create({ data });
export const getAllCampaigns = (): Promise<Campaign[]> => prisma.campaign.findMany();
export const getCampaignById = (id: string): Promise<Campaign | null> => prisma.campaign.findUnique({ where: { id } });
export const updateCampaign = (id: string, data: Partial<Campaign>): Promise<Campaign> => prisma.campaign.update({ where: { id }, data });
export const deleteCampaign = (id: string): Promise<Campaign> => prisma.campaign.delete({ where: { id } }); 