import express from 'express'
import { protectRoute } from '../middleware/protectRoute.js';
import { createPost, deletePost, 
    commentOnPost, likeUnlikePost, getAllPosts, 
    getLikedPosts, getFollowingPosts, getUserPosts, getNewestPosts, getPost,
    deleteComment, repostPost,
    deleteRepostPost, getUserRepostedPosts
} from '../controllers/post.controller.js';

const router = express.Router();

router.get("/all", protectRoute, getAllPosts);
router.get("/:username/:id", protectRoute, getPost);
router.get("/newest", getNewestPosts);
router.get("/following", protectRoute, getFollowingPosts);
router.get("/liked/:username/:id", protectRoute, getLikedPosts);
router.get("/user/posted/:username", protectRoute, getUserPosts);
router.get("/reposted/:username/:id", protectRoute, getUserRepostedPosts);
router.post("/repost/:id", protectRoute, repostPost);
router.delete("/repost/delete/:id/:repostId", protectRoute, deleteRepostPost);
router.post('/create', protectRoute, createPost);
router.post('/like/:id', protectRoute, likeUnlikePost);
router.post('/comment/:id', protectRoute, commentOnPost);
router.delete('/:id', protectRoute, deletePost);
router.delete('/comment/:postId/:commentId', protectRoute, deleteComment);

export default router;
