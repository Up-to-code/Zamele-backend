import { Request, Response, NextFunction } from 'express';
import * as leaderboardEntryService from '../services/leaderboardEntryService';

export const createLeaderboardEntry = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const leaderboardEntry = await leaderboardEntryService.createLeaderboardEntry(req.body);
    res.status(201).json(leaderboardEntry);
  } catch (err) {
    next(err);
  }
};

export const getAllLeaderboardEntries = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const leaderboardEntries = await leaderboardEntryService.getAllLeaderboardEntries();
    res.json(leaderboardEntries);
  } catch (err) {
    next(err);
  }
};

export const getLeaderboardEntryById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const leaderboardEntry = await leaderboardEntryService.getLeaderboardEntryById(req.params.id);
    if (!leaderboardEntry) return res.status(404).json({ message: 'LeaderboardEntry not found' });
    res.json(leaderboardEntry);
  } catch (err) {
    next(err);
  }
};

export const updateLeaderboardEntry = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const leaderboardEntry = await leaderboardEntryService.updateLeaderboardEntry(req.params.id, req.body);
    res.json(leaderboardEntry);
  } catch (err) {
    next(err);
  }
};

export const deleteLeaderboardEntry = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await leaderboardEntryService.deleteLeaderboardEntry(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}; 