import Car from "../models/car.model.js";
import {v2 as cloudinary} from "cloudinary";


export const getAllCar = async (req, res) => {
    try {
        const cars = await Car.find().sort({ createdAt: -1 });

        if(cars.length === 0) {
            return res.status(200).json([]);
        }

        res.status(200).json(cars);
    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ error: "Something went wrong" });
    }
};

export const addCar = async (req, res) => {
    try {
        const {horsepower, torque, top_speed, acceleration, bio, 
            brand, car_model, production_year, body_style, engine, transmission, 
            drive_type, exterior_color, interior_color, fuel_type, seat_capacity, 
            cargo_space, audio_system, price, quantity, warranty} = req.body;
        const {images} = req.body;
        if(images) {
            const promises = images.map(image => cloudinary.uploader.upload(image));
            const results = await Promise.all(promises);
            req.body.images = results.map(result => result.secure_url);
        }

        const newCar = new Car(req.body);

        // check if car already exists

        const existingCar = await Car.findOne({ brand, car_model, production_year });
        if(existingCar) {
            return res.status(400).json({ error: "Car already exists" });
        }

        await newCar.save();

        res.status(200).json(newCar);

    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ error: "Something went wrong" });
    }
}

export const getCar = async (req, res) => {
    try {
        const carId = req.params.id;
        const existingCar = await Car.findById(carId);

        if(existingCar) {
            res.status(200).json(existingCar);
        } else {
            res.status(404).json({ error: "Car not found" });
        }
    } catch(error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ error: "Something went wrong" });
    }
}

export const deleteCar = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if(!car) {
            return res.status(404).json({ message: "Car not found" });
        }
        
        if(car.images) {
            const promises = car.images.map(image => {
                const imgId = image.split("/").pop().split(".")[0];
                return cloudinary.uploader.destroy(imgId);
            });
            await Promise.all(promises);
        }

        await Car.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: "Car deleted" });
    } catch(error) {
        console.log("Error in deletePost controller: ", error);
        res.status(500).json({ message: "Internal Server error" });
    }   
};