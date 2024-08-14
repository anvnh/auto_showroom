import express from "express";

import { addVoucher } from "../controllers/voucher.controller.js";

const router = express.Router();

// TODO
router.get("/", (req, res) => {
    res.json("Voucher route");
});

router.get("/add", addVoucher);

export default router;