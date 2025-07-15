import { Request, Response, NextFunction } from 'express';
import * as answerService from '../services/answerService';

export const createAnswer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const answer = await answerService.createAnswer(req.body);
    res.status(201).json(answer);
  } catch (err) {
    next(err);
  }
};

export const getAllAnswers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const answers = await answerService.getAllAnswers();
    res.json(answers);
  } catch (err) {
    next(err);
  }
};

export const getAnswerById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const answer = await answerService.getAnswerById(req.params.id);
    if (!answer) return res.status(404).json({ message: 'Answer not found' });
    res.json(answer);
  } catch (err) {
    next(err);
  }
};

export const updateAnswer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const answer = await answerService.updateAnswer(req.params.id, req.body);
    res.json(answer);
  } catch (err) {
    next(err);
  }
};

export const deleteAnswer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await answerService.deleteAnswer(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}; 