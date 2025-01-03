import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
    getUserProfile,
    followUnfollowUser,
    getSuggestedUsers,
    updateUser,
    getFollowingUsers,
    getFollowerUsers,
    getUserProfileWithID,
    addCart,
    getCart,
    deleteCart,
    deleteUser,
    getAllUserProfile,
    sendPaymentDetails,
    sendPaymentDetailsBuyNow,
    sendDeliveryConfirmationMail,
    getPostsAndLikes,
    getVouchers,
    deleteAllCart,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile/all", protectRoute, getAllUserProfile);
router.get("/profile/:username", protectRoute, getUserProfile);
router.get("/info/:id", protectRoute, getUserProfileWithID);
router.get("/suggested", protectRoute, getSuggestedUsers);
router.post("/follow/:id", protectRoute, followUnfollowUser);
router.post("/update", protectRoute, updateUser);
router.get("/following/:id", protectRoute, getFollowingUsers);
router.get("/followers/:id", protectRoute, getFollowerUsers);
router.post("/add/cart/:id", protectRoute, addCart);
router.get("/cart", protectRoute, getCart);
router.delete("/delete/all/cart", protectRoute, deleteAllCart);
router.post("/payment/details", protectRoute, sendPaymentDetails);
router.post("/payment/buynow/details", sendPaymentDetailsBuyNow);
router.post("/delivery/confirmation", sendDeliveryConfirmationMail);
router.delete("/delete/cart/:id", protectRoute, deleteCart);
router.delete("/delete/confirm/:id", protectRoute, deleteUser);

router.get("/postsAndLikes", protectRoute, getPostsAndLikes);
router.get("/vouchers", protectRoute, getVouchers);

export default router;
