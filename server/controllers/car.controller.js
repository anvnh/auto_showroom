import Car from "../models/car.model.js";

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
        const {bio, brand, car_model, production_year, 
            body_style, engine, transmission, drive_type, exterior_color, interior_color,
            fuel_type, performance, seat_capacity, cargo_space, audio_system, price, quantity, warranty, image
        } = req.body;

        const newCar = new Car({
            bio, brand, car_model, production_year, 
            body_style, engine, transmission, drive_type, exterior_color, interior_color,
            fuel_type, performance, seat_capacity, cargo_space, audio_system, price, quantity, warranty, image
        });

        // check if any car with the same brand and model already exists
        const existingCar = await Car.findOne({ brand , car_model });
        if(existingCar) {
            return res.status(400).json({ error: "Car already exists" });
        }

        if(newCar) {
            await newCar.save();
            res.status(200).json(newCar);
        }
        else {
            res.status(400).json({ error: "Invalid car data" });
        }

    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ error: "Something went wrong" });
    }
}

export const getCar = async (req, res) => {
    try {
        const { id } = req.params;
        const car = await Car.findById(id);

        if(car) {
            res.status(200).json(car);
        } else {
            res.status(404).json({ error: "Car not found" });
        }
    } catch {
        console.log("Error in login controller", error.message);
        res.status(500).json({ error: "Something went wrong" });
    }

}