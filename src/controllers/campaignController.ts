import { Request, Response, NextFunction } from 'express';
import * as campaignService from '../services/campaignService';

export const createCampaign = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const campaign = await campaignService.createCampaign(req.body);
    res.status(201).json(campaign);
  } catch (err) {
    next(err);
  }
};

export const getAllCampaigns = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const campaigns = await campaignService.getAllCampaigns();
    res.json(campaigns);
  } catch (err) {
    next(err);
  }
};

export const getCampaignById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const campaign = await campaignService.getCampaignById(req.params.id);
    if (!campaign) return res.status(404).json({ message: 'Campaign not found' });
    res.json(campaign);
  } catch (err) {
    next(err);
  }
};

export const updateCampaign = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const campaign = await campaignService.updateCampaign(req.params.id, req.body);
    res.json(campaign);
  } catch (err) {
    next(err);
  }
};

export const deleteCampaign = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await campaignService.deleteCampaign(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}; 