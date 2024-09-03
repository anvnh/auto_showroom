import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
    addOrderItems,
    getAllOrders,
} from "../controllers/order.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello from order route");
});

router.get("/all", getAllOrders);
router.post("/add", addOrderItems); 

export default router;
