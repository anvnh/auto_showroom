import express from 'express';
const router = express.Router();
import { protectRoute } from '../middleware/protectRoute.js';
import { getAllCar, addCar, getCar, deleteCar } from '../controllers/car.controller.js';

router.post("/add", addCar);
router.get("/all", getAllCar);
router.get("/:id", getCar);
router.delete("/:id", protectRoute, deleteCar);

export default router;