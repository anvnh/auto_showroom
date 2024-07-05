import express from 'express';
import { protectRoute } from '../middleware/protectRoute.js';
import { getUserProfile, followUnfollowUser, 
    getSuggestedUsers, updateUser, getFollowingUsers, getFollowerUsers, getUserProfileWithID
} from '../controllers/user.controller.js';
import { get } from 'mongoose';

const router = express.Router();

router.get("/profile/:username", protectRoute, getUserProfile);
router.get("/profile/:id", protectRoute, getUserProfileWithID);
router.get("/suggested", protectRoute, getSuggestedUsers);
router.post("/follow/:id", protectRoute, followUnfollowUser);
router.post("/update", protectRoute, updateUser);
router.get("/following/:id", protectRoute, getFollowingUsers);
router.get("/followers/:id", protectRoute, getFollowerUsers);

export default router;
