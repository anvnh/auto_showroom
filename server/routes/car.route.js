import express from 'express';
const router = express.Router();
import { protectRoute } from '../middleware/protectRoute.js';
import { getAllCar, addCar, getCar, deleteCar, reviewCar, getCarReview, getBestReview, getCountReview,
    getSuggestedCars, findCar, updateCar, getPhobertPrediction,
    getMostRatedCar, getMinMax, deleteReview
} from '../controllers/car.controller.js';
import { phobert } from '../middleware/phobert.js';

router.post("/add", addCar);
router.get("/all", getAllCar);
router.get("/:id", getCar);
router.post("/update/:id", protectRoute, updateCar);
router.get("/reviewed/best", getBestReview);
router.get("/reviewed/count", getCountReview);
router.get("/reviewed/:id", getCarReview);
router.get("/other/suggested", getSuggestedCars);
router.get("/other/getMinMax", getMinMax);
router.delete("/:id", protectRoute, deleteCar);
router.post("/phobert/predict", getPhobertPrediction);
router.post('/comment/:id/:userId', reviewCar);
router.get("/find/mostRated", getMostRatedCar);
router.get("/", findCar);

router.delete("/delete/:carId/:reviewId", protectRoute, deleteReview);


export default router;
