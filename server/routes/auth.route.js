import express from 'express';
import { signup, login, logout, getMe, sendConfirmationMail } from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/protectRoute.js';

const router = express.Router();

router.get('/me', protectRoute, getMe);
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.post('/confirmationEmail', sendConfirmationMail);

export default router;
