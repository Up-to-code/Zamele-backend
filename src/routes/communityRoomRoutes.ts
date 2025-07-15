import { Router } from 'express';
import * as communityRoomController from '../controllers/communityRoomController';

const router = Router();

router.post('/', communityRoomController.createCommunityRoom);
router.get('/', communityRoomController.getAllCommunityRooms);
router.get('/:id', communityRoomController.getCommunityRoomById);
router.put('/:id', communityRoomController.updateCommunityRoom);
router.delete('/:id', communityRoomController.deleteCommunityRoom);

export default router; 