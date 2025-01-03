import express from "express";

import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import nofiticationRoutes from "./routes/notification.route.js";
import carRoutes from "./routes/car.route.js";
import voucherRoutes from "./routes/voucher.route.js";
import orderRoutes from "./routes/order.route.js";

import connectMongoDB from "./db/connectMongoDB.js";
import cors from "cors";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // to allow cross-origin requests

app.use(express.json({ limit: "10mb" })); // to parse req.body
// limit shouldn't be too hight to prevent DOS
app.use(express.urlencoded({ extended: true })); // to parse form data(urlencoded)

app.use(cookieParser()); // to parse cookies

app.get("/", (req, res) => {
    res.json("AAP api");
});

app.use("/api/auth", authRoutes); // auth routes
app.use("/api/user", userRoutes); // user routes
app.use("/api/posts", postRoutes); // post routes
app.use("/api/notifications", nofiticationRoutes); // notification routes
app.use("/api/car", carRoutes); // car routes
app.use("/api/vouchers", voucherRoutes); // voucher routes
app.use("/api/order", orderRoutes); // order routes

app.listen(5000, () => {
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
});
