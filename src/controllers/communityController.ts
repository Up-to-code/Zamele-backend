import { Request, Response, NextFunction } from 'express';
import * as communityService from '../services/communityService';

export const createCommunity = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const community = await communityService.createCommunity(req.body);
    res.status(201).json(community);
  } catch (err) {
    next(err);
  }
};

export const getAllCommunities = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const communities = await communityService.getAllCommunities();
    res.json(communities);
  } catch (err) {
    next(err);
  }
};

export const getCommunityById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const community = await communityService.getCommunityById(req.params.id);
    if (!community) return res.status(404).json({ message: 'Community not found' });
    res.json(community);
  } catch (err) {
    next(err);
  }
};

export const updateCommunity = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const community = await communityService.updateCommunity(req.params.id, req.body);
    res.json(community);
  } catch (err) {
    next(err);
  }
};

export const deleteCommunity = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await communityService.deleteCommunity(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}; 