import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration for Vercel
app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
        ? ['https://aapvietnam.online', 'https://www.aapvietnam.online', process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '']
        : ['http://localhost:3000', 'http://localhost:5173'],
    credentials: true,
    optionsSuccessStatus: 200
}));

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true, limit: "5mb" }));
app.use(cookieParser());

// Health check endpoint
app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});

app.get("/", (req, res) => {
    res.json("AAP api");
});

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/notifications", nofiticationRoutes);
app.use("/api/car", carRoutes);
app.use("/api/vouchers", voucherRoutes);
app.use("/api/order", orderRoutes);

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
    const clientDistPath = path.join(__dirname, '../client/dist');
    app.use(express.static(clientDistPath));
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(clientDistPath, 'index.html'));
    });
}

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'development' ? err.message : {}
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// Connect to MongoDB
connectMongoDB();

// Export for Vercel
const vercelHandler = app;

// For Vercel, export the app; for local, start server
if (!process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

export default vercelHandler;
