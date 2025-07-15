import { Router } from 'express';
import * as communityController from '../controllers/communityController';

const router = Router();

router.post('/', communityController.createCommunity);
router.get('/', communityController.getAllCommunities);
router.get('/:id', communityController.getCommunityById);
router.put('/:id', communityController.updateCommunity);
router.delete('/:id', communityController.deleteCommunity);

export default router; 