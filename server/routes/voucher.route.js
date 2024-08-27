import express from "express";

import { addVoucher, getAllVouchers, deleteVoucher } from "../controllers/voucher.controller.js";

const router = express.Router();

// TODO
router.get("/", (req, res) => {
    res.json("Voucher route");
});

router.get("/all", getAllVouchers);
router.post("/add", addVoucher);
router.delete("/delete/:id", deleteVoucher);

export default router;
