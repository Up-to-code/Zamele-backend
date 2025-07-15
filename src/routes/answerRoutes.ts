import { Router } from 'express';
import * as answerController from '../controllers/answerController';

const router = Router();

router.post('/', answerController.createAnswer);
router.get('/', answerController.getAllAnswers);
router.get('/:id', answerController.getAnswerById);
router.put('/:id', answerController.updateAnswer);
router.delete('/:id', answerController.deleteAnswer);

export default router; 