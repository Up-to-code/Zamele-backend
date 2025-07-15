import { Request, Response, NextFunction } from 'express';
import * as communityUserService from '../services/communityUserService';

export const createCommunityUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const communityUser = await communityUserService.createCommunityUser(req.body);
    res.status(201).json(communityUser);
  } catch (err) {
    next(err);
  }
};

export const getAllCommunityUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const communityUsers = await communityUserService.getAllCommunityUsers();
    res.json(communityUsers);
  } catch (err) {
    next(err);
  }
};

export const getCommunityUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const communityUser = await communityUserService.getCommunityUserById(req.params.id);
    if (!communityUser) return res.status(404).json({ message: 'CommunityUser not found' });
    res.json(communityUser);
  } catch (err) {
    next(err);
  }
};

export const updateCommunityUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const communityUser = await communityUserService.updateCommunityUser(req.params.id, req.body);
    res.json(communityUser);
  } catch (err) {
    next(err);
  }
};

export const deleteCommunityUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await communityUserService.deleteCommunityUser(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}; 