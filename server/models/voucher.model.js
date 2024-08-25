import mongoose from "mongoose";

const voucherSchema = new mongoose.Schema(
	{
		discount: {
			type: Number,
			required: true,
		},
		minOrder: {
			type: Number,
			required: true,
		},
        condition: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
	},
	{ timestamps: true }
);

const Voucher = mongoose.model("Voucher", voucherSchema);

export default Voucher;
