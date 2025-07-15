import { Request, Response, NextFunction } from 'express';
import * as questionService from '../services/questionService';

export const createQuestion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const question = await questionService.createQuestion(req.body);
    res.status(201).json(question);
  } catch (err) {
    next(err);
  }
};

export const getAllQuestions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const questions = await questionService.getAllQuestions();
    res.json(questions);
  } catch (err) {
    next(err);
  }
};

export const getQuestionById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const question = await questionService.getQuestionById(req.params.id);
    if (!question) return res.status(404).json({ message: 'Question not found' });
    res.json(question);
  } catch (err) {
    next(err);
  }
};

export const updateQuestion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const question = await questionService.updateQuestion(req.params.id, req.body);
    res.json(question);
  } catch (err) {
    next(err);
  }
};

export const deleteQuestion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await questionService.deleteQuestion(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}; 