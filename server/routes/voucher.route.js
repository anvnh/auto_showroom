import express from "express";

import { addVoucher, getAllVouchers, deleteVoucher, checkIfMeetConditions, moveVoucherToUsed } from "../controllers/voucher.controller.js";
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
router.post("/move", protectRoute, moveVoucherToUsed)

export default router;
