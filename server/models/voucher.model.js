import mongoose from "mongoose";

const voucherSchema = new mongoose.Schema(
	{
		discount: {
			type: Number,
			required: true,
		},
		minPrice: {
			type: Number,
			required: true,
		},
		minPosts: {
			type: Number,
			required: true,
		},
		minLikes: {
			type: Number,
			required: true,
		},
		manufacturDate: {
			type: String,
			required: true,
		},
		expiryDate: {
			type: String,
			required: true,
		},
        img: {
            type: String,
			required: true,
        },
	},
	{ timestamps: true }
);

const Voucher = mongoose.model("Voucher", voucherSchema);

export default Voucher;
