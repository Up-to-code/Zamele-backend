import { Router } from 'express';
import * as communityUserController from '../controllers/communityUserController';

const router = Router();

router.post('/', communityUserController.createCommunityUser);
router.get('/', communityUserController.getAllCommunityUsers);
router.get('/:id', communityUserController.getCommunityUserById);
router.put('/:id', communityUserController.updateCommunityUser);
router.delete('/:id', communityUserController.deleteCommunityUser);

export default router; 