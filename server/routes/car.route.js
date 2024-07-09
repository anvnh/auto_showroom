import express from 'express';
const router = express.Router();
import { protectRoute } from '../middleware/protectRoute.js';
import { getAllCar, addCar, getCar } from '../controllers/car.controller.js';

router.get("/add", addCar);
router.get("/all", getAllCar);
router.get("/:id", getCar);

export default router;