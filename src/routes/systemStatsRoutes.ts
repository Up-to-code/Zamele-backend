import { Router } from 'express';
import * as systemStatsController from '../controllers/systemStatsController';

const router = Router();

router.post('/', systemStatsController.createSystemStats);
router.get('/', systemStatsController.getAllSystemStats);
router.get('/:id', systemStatsController.getSystemStatsById);
router.put('/:id', systemStatsController.updateSystemStats);
router.delete('/:id', systemStatsController.deleteSystemStats);

export default router; 