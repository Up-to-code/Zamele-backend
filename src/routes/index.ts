import { Router } from 'express';
import healthController from '../controllers/healthController';
import userRoutes from './userRoutes';
import questionRoutes from './questionRoutes';
import answerRoutes from './answerRoutes';
import postRoutes from './postRoutes';
import commentRoutes from './commentRoutes';
import campaignRoutes from './campaignRoutes';
import courseRoutes from './courseRoutes';
import communityRoutes from './communityRoutes';
import communityUserRoutes from './communityUserRoutes';
import communityRoomRoutes from './communityRoomRoutes';
import newsRoutes from './newsRoutes';
import leaderboardEntryRoutes from './leaderboardEntryRoutes';
import systemStatsRoutes from './systemStatsRoutes';

const router = Router();

router.get('/health', healthController);
router.use('/users', userRoutes);
router.use('/questions', questionRoutes);
router.use('/answers', answerRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/campaigns', campaignRoutes);
router.use('/courses', courseRoutes);
router.use('/communities', communityRoutes);
router.use('/community-users', communityUserRoutes);
router.use('/community-rooms', communityRoomRoutes);
router.use('/news', newsRoutes);
router.use('/leaderboard-entries', leaderboardEntryRoutes);
router.use('/system-stats', systemStatsRoutes);

export default router; 