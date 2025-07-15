import { Request, Response, NextFunction } from 'express';
import * as commentService from '../services/commentService';

export const createComment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const comment = await commentService.createComment(req.body);
    res.status(201).json(comment);
  } catch (err) {
    next(err);
  }
};

export const getAllComments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const comments = await commentService.getAllComments();
    res.json(comments);
  } catch (err) {
    next(err);
  }
};

export const getCommentById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const comment = await commentService.getCommentById(req.params.id);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });
    res.json(comment);
  } catch (err) {
    next(err);
  }
};

export const updateComment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const comment = await commentService.updateComment(req.params.id, req.body);
    res.json(comment);
  } catch (err) {
    next(err);
  }
};

export const deleteComment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await commentService.deleteComment(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}; 