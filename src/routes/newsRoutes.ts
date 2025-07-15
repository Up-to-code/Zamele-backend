import { Router } from 'express';
import * as newsController from '../controllers/newsController';

const router = Router();

router.post('/', newsController.createNews);
router.get('/', newsController.getAllNews);
router.get('/:id', newsController.getNewsById);
router.put('/:id', newsController.updateNews);
router.delete('/:id', newsController.deleteNews);

export default router; 