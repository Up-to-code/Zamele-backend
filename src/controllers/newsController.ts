import { Request, Response, NextFunction } from 'express';
import * as newsService from '../services/newsService';

export const createNews = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const news = await newsService.createNews(req.body);
    res.status(201).json(news);
  } catch (err) {
    next(err);
  }
};

export const getAllNews = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const news = await newsService.getAllNews();
    res.json(news);
  } catch (err) {
    next(err);
  }
};

export const getNewsById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const news = await newsService.getNewsById(req.params.id);
    if (!news) return res.status(404).json({ message: 'News not found' });
    res.json(news);
  } catch (err) {
    next(err);
  }
};

export const updateNews = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const news = await newsService.updateNews(req.params.id, req.body);
    res.json(news);
  } catch (err) {
    next(err);
  }
};

export const deleteNews = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await newsService.deleteNews(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}; 