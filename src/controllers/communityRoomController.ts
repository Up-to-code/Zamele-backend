import { Request, Response, NextFunction } from 'express';
import * as communityRoomService from '../services/communityRoomService';

export const createCommunityRoom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const communityRoom = await communityRoomService.createCommunityRoom(req.body);
    res.status(201).json(communityRoom);
  } catch (err) {
    next(err);
  }
};

export const getAllCommunityRooms = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const communityRooms = await communityRoomService.getAllCommunityRooms();
    res.json(communityRooms);
  } catch (err) {
    next(err);
  }
};

export const getCommunityRoomById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const communityRoom = await communityRoomService.getCommunityRoomById(req.params.id);
    if (!communityRoom) return res.status(404).json({ message: 'CommunityRoom not found' });
    res.json(communityRoom);
  } catch (err) {
    next(err);
  }
};

export const updateCommunityRoom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const communityRoom = await communityRoomService.updateCommunityRoom(req.params.id, req.body);
    res.json(communityRoom);
  } catch (err) {
    next(err);
  }
};

export const deleteCommunityRoom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await communityRoomService.deleteCommunityRoom(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}; 