import Voucher from "../models/voucher.model.js";
import User from "../models/user.model.js";
import { v2 as cloudinary } from "cloudinary";

function formatDateToDDMMYYYY(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

function parseDate(dateString) {
    const [day, month, year] = dateString.split("/").map(Number);
    return new Date(year, month - 1, day);
}

export const getAllVouchers = async (req, res) => {
    try {
        const vouchers = await Voucher.find();
        res.status(200).json(vouchers);
    } catch (error) {
        console.log("Error in getAllVouchers: ", error.message);
        res.status(500).json({ message: error.message });
    }
};

export const addVoucher = async (req, res) => {
    try {
        const {
            discount,
            minPrice,
            minPosts,
            minLikes,
            manufacturDate,
            expiryDate,
        } = req.body;
        let { img } = req.body;

        if (!img) {
            return res.status(400).json({ message: "Please upload an image" });
        }
        if (img) {
            const uploadedResponse = await cloudinary.uploader.upload(img);
            img = uploadedResponse.secure_url;
        }

        // const manufacturDateObj = (manufacturDate);
        // const expiryDateObj = (expiryDate);
        const manufacturDateObj = new Date(manufacturDate.split('-').reverse().join('-'));
        const expiryDateObj = new Date(expiryDate.split('-').reverse().join('-'));
        const currentDate = new Date();
        if (
            manufacturDateObj > expiryDateObj || manufacturDateObj < currentDate
        ) {
            return res.status(400).json({ message: "Invalid date range" });
        }

        // check if voucher is already created
        const existingVoucher = await Voucher.findOne({
            discount,
            minPrice,
            minPosts,
            minLikes,
            manufacturDate,
            expiryDate,
            img,
        });

        if (existingVoucher) {
            return res.status(400).json({ message: "Voucher already exists" });
        }

        const newVoucher = new Voucher({
            discount,
            minPrice,
            minPosts,
            minLikes,
            manufacturDate,
            expiryDate,
            img,
        });
        await newVoucher.save();

        res.status(201).json(newVoucher);
    } catch (error) {
        console.log("Error in addVoucher: ", error.message);
        res.status(500).json({ message: error.message });
    }
};

export const deleteVoucher = async (req, res) => {
    try {
        const { id } = req.params;

        const voucher = await Voucher.findById(id);

        if (!voucher) {
            return res.status(404).json({ message: "Voucher not found" });
        }
        // remove image from cloudinary
        const publicId = voucher.img.split("/").pop().split(".")[0];
        await cloudinary.uploader.destroy(publicId);

        await Voucher.findByIdAndDelete(id);

        res.status(200).json({ message: "Voucher deleted successfully" });
    } catch (error) {
        console.log("Error in deleteVoucher: ", error.message);
        res.status(500).json({ message: error.message });
    }
};

export const checkIfMeetConditions = async (req, res) => {
    try {
        const { posts, likes } = req.body;

        // check if with that likes and posts, user can get a voucher in the database ?

        const vouchers = await Voucher.find();
        const currentDate = new Date();
        let validVouchers = [];
        for (const voucher of vouchers) {
            const { minPosts, minLikes, expiryDate } = voucher;
            const expiryDateObj = new Date(expiryDate.split('-').reverse().join('-'));
            if (
                posts >= minPosts &&
                likes >= minLikes &&
                expiryDateObj > currentDate
            ) {
                validVouchers.push(voucher);
            }
        }
        // choose the voucher with the highest discount

        if (validVouchers.length === 0) {
            return;
        }

        let maxDiscount = 0;
        let maxDiscountVoucher = null;
        for (const voucher of validVouchers) {
            if (voucher.discount > maxDiscount) {
                maxDiscount = voucher.discount;
                maxDiscountVoucher = voucher;
            }
        }

        // check if user already has this voucher
        const user = await User.findById(req.user._id);
        for (const userVoucher of user.vouchers) {
            if (userVoucher.toString() === maxDiscountVoucher._id.toString()) {
                return;
            }
        }

        // add voucher to user

        user.vouchers.push(maxDiscountVoucher._id);
        await user.save();

        res.status(200).json({maxDiscountVoucher, user});

    } catch (error) {
        console.log("Error in checkIfMeetConditions: ", error.message);
        res.status(500).json({ message: error.message });
    }
}

