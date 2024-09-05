import express from "express";

import { addVoucher, getAllVouchers, deleteVoucher, checkIfMeetConditions } from "../controllers/voucher.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

// TODO
router.get("/", (req, res) => {
    res.json("Voucher route");
});

router.get("/all", getAllVouchers);
router.post("/add", addVoucher);
router.post("/addVoucher", addVoucher);
router.delete("/delete/:id", deleteVoucher);
router.post("/check", protectRoute, checkIfMeetConditions);

export default router;
