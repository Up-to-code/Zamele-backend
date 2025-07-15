import { Request, Response, NextFunction } from 'express';
import * as systemStatsService from '../services/systemStatsService';

export const createSystemStats = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const systemStats = await systemStatsService.createSystemStats(req.body);
    res.status(201).json(systemStats);
  } catch (err) {
    next(err);
  }
};

export const getAllSystemStats = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const systemStats = await systemStatsService.getAllSystemStats();
    res.json(systemStats);
  } catch (err) {
    next(err);
  }
};

export const getSystemStatsById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const systemStats = await systemStatsService.getSystemStatsById(req.params.id);
    if (!systemStats) return res.status(404).json({ message: 'SystemStats not found' });
    res.json(systemStats);
  } catch (err) {
    next(err);
  }
};

export const updateSystemStats = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const systemStats = await systemStatsService.updateSystemStats(req.params.id, req.body);
    res.json(systemStats);
  } catch (err) {
    next(err);
  }
};

export const deleteSystemStats = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await systemStatsService.deleteSystemStats(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}; 