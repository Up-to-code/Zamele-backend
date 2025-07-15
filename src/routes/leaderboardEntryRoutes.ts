import { Router } from 'express';
import * as leaderboardEntryController from '../controllers/leaderboardEntryController';

const router = Router();

router.post('/', leaderboardEntryController.createLeaderboardEntry);
router.get('/', leaderboardEntryController.getAllLeaderboardEntries);
router.get('/:id', leaderboardEntryController.getLeaderboardEntryById);
router.put('/:id', leaderboardEntryController.updateLeaderboardEntry);
router.delete('/:id', leaderboardEntryController.deleteLeaderboardEntry);

export default router; 