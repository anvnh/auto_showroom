import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
    addOrderItems,
} from "../controllers/order.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello from order route");
});

router.post("/add", protectRoute, addOrderItems); 

export default router;
