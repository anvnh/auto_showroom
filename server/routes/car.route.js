import express from 'express';
const router = express.Router();
import { protectRoute } from '../middleware/protectRoute.js';
import { getAllCar, addCar } from '../controllers/car.controller.js';

router.get("/add", addCar);
router.get("/all", getAllCar);

export default router;