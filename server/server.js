import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import {v2 as cloudinary} from 'cloudinary';

import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import postRoutes from './routes/post.route.js';
import nofiticationRoutes from './routes/notification.route.js';

import connectMongoDB from './db/connectMongoDB.js';
import cors from 'cors';

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(cors(
    {
        origin: ["https://auto-showroom-zeta.vercel.app/"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    }
)); // to allow cross-origin requests

app.use(express.json({limit:"5mb"})); // to parse req.body
// limit shouldn't be too hight to prevent DOS
app.use(express.urlencoded({ extended: true })); // to parse form data(urlencoded)

app.use(cookieParser()); // to parse cookies

app.use("/", (req, res) => {
    res.send("Welcome to Social Media API");
});
app.use("/api/auth", authRoutes); // auth routes
app.use("/api/user", userRoutes); // user routes
app.use("/api/posts", postRoutes); // post routes
app.use("/api/notifications", nofiticationRoutes); // notification routes

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
});
