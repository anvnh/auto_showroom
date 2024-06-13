require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');

// create express app
const app = express();

// cors 
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Allow these HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
}));

// middleware   
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

// routes
app.use('/api/users', userRoutes);

// connect to mongodb
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB & Server is running on port 4000')
        });
    })
    .catch((err) => console.log(err));
    


