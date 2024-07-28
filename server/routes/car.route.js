import express from 'express';
const router = express.Router();
import { protectRoute } from '../middleware/protectRoute.js';
import { getAllCar, addCar, getCar, deleteCar, reviewCar, getCarReview, getBestReview } from '../controllers/car.controller.js';

router.post("/add", addCar);
router.get("/all", getAllCar);
router.get("/:id", getCar);
router.get("/reviewed/best", getBestReview);
router.get("/reviewed/:id", getCarReview);
router.delete("/:id", protectRoute, deleteCar);
router.post('/comment/:id', protectRoute, reviewCar);


export default router;
