import express from "express";
import {
    signup,
    login,
    logout,
    getMe,
    sendConfirmationMail,
    sendConfirmationToken,
    confirmEmail,
    forgotPassword,
    resetPassword,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/me", protectRoute, getMe);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/confirmationEmail", sendConfirmationMail);
router.post("/confirm/sendToken", sendConfirmationToken);
router.get("/verified/:token", confirmEmail);
router.post("/confirm/sendResetToken", forgotPassword);
router.post("/resetPassword", resetPassword);

export default router;
