import express from 'express'
import { protectRoute } from '../middleware/protectRoute.js';
import { createPost, deletePost, 
    commentOnPost, likeUnlikePost, getAllPosts, getLikedPosts, getFollowingPosts, getUserPosts, getNewestPosts, getPost
} from '../controllers/post.controller.js';

const router = express.Router();

router.get("/all", protectRoute, getAllPosts);
router.get("/:username/:id", protectRoute, getPost);
router.get("/newest", getNewestPosts);
router.get("/following", protectRoute, getFollowingPosts);
router.get("/likes/:id", protectRoute, getLikedPosts);
router.get("/user/:username", protectRoute, getUserPosts);
router.post('/create', protectRoute, createPost);
router.post('/like/:id', protectRoute, likeUnlikePost);
router.post('/comment/:id', protectRoute, commentOnPost);
router.delete('/:id', protectRoute, deletePost);

export default router;
