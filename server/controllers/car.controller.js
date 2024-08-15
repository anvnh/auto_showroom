import Car from "../models/car.model.js";
import {v2 as cloudinary} from "cloudinary";
import axios from "axios";

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

export const getCarReview = async (req, res) => {
    try {
        const carId = req.params.id;
        const existingCar = await Car.findById(carId)
        .populate({
            path: "user_review.user",
            select: "-password",
        })

        if(existingCar) {
            res.status(200).json(existingCar.user_review);
        }

        else {
            res.status(404).json({ error: "Car not found" });
        }
    } catch(error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ error: "Something went wrong" });
    }
}

export const getBestReview = async (req, res) => {
    try {
		const cars = await Car.find();
		let bestReview = null;
		let highestSingleReview = null;

		cars.forEach((car) => {
			if (car.user_review && car.user_review.length > 0) {
				const highRatings = car.user_review.filter(
					(review) => review.rating >= 4
				);
				const lowRatings = car.user_review.filter(
					(review) => review.rating < 4
				);

				if (highRatings.length > lowRatings.length) {
					const bestCarReview = highRatings.sort(
						(a, b) => b.rating - a.rating
					)[0];
					if (
						!bestReview ||
						bestCarReview.rating > bestReview.rating
					) {
						bestReview = bestCarReview;
					}
				}

				const bestSingleReview = car.user_review.sort(
					(a, b) => b.rating - a.rating
				)[0];
				if (
					!highestSingleReview ||
					bestSingleReview.rating > highestSingleReview.rating
				) {
					highestSingleReview = bestSingleReview;
				}
			}
		});

		if (bestReview) {
			res.status(200).json(bestReview);
		} else if (highestSingleReview) {
			res.status(200).json(highestSingleReview);
		} else {
			res.status(404).json({ error: "There is not reviewed yet!!" });
		}
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Something went wrong" });
	}   
}

export const getCountReview = async (req, res) => {
    try {
        const cars = await Car.find();
        let count = 0;
        for(let i = 0; i < cars.length; i++) {
            if(cars[i].user_review && cars[i].user_review.length > 0) {
                count += cars[i].user_review.length;
            }
        }
        res.status(200).json({ count });
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

export const reviewCar = async (req, res) => {
    try {
        const {text, rated} = req.body;
        const carId = req.params.id;
        const userId = req.params.userId;

        if(!text) {
            return res.status(400).json({ message: "Text field is required" });
        }

        if(!rated) {
            return res.status(400).json({ message: "Rating field is required" });
        }

        const car = await Car.findById(carId);

        if(!car) {
            return res.status(404).json({ message: "Car not found" });
        }

        const comment = {text, rated, user: userId };

        car.user_review.push(comment);

        await car.save();

        res.status(201).json({car});

    } catch(error) {
        console.log("Error in commentOnPost controller: ", error);
        res.status(500).json({ message: "Internal Server error" });
    }
};

export const deleteReview = async (req, res) => {
    try {
        const {carId, reviewId} = req.params;
        const car = await Car.findById(carId);

        if(!car) {
            return res.status(404).json({ message: "Car not found" });
        }

        const review = car.user_review.id(reviewId);

        if(!review) {
            return res.status(404).json({ message: "Review not found" });
        }

        const index = car.user_review.indexOf(review);
        car.user_review.splice(index, 1);

        await car.save();

        res.status(200).json({ message: "Review deleted" });

    } catch(error) {
        console.log("Error in deleteReview controller: ", error);
        res.status(500).json({ message: "Internal Server error" });
    }
}

export const getSuggestedCars = async (req, res) => {
    try {
        const cars = await Car.find(); 
        const carsWithReviews = cars.filter(
            (car) => car.user_review && car.user_review.length > 0
        );
        const suggestedCars = carsWithReviews
            .sort((a, b) => b.user_review.length - a.user_review.length)
            .slice(0, 8);
        res.status(200).json(suggestedCars);
    } catch (error) {
        console.log("Error in getSuggestedCars controller", error.message); 
        res.status(500).json({ error: "Something went wrong" });
    }
};

export const getMinMax = async (req, res) => {
    try {
        const cars = await Car.find();
        const minPrice = cars.reduce((min, car) => Math.min(min, Number(car.price.replace( /,/g, ""))), Number(cars[0].price.replace( /,/g, "")));
        const maxPrice = cars.reduce((max, car) => Math.max(max, Number(car.price.replace( /,/g, ""))), Number(cars[0].price.replace( /,/g, "")));
        res.status(200).json({ minPrice, maxPrice });
    } catch (error) {
        console.log("Error in getMinMax controller", error.message);
        res.status(500).json({ error: "Something went wrong" });
    }
};

export const findCar = async (req, res) => {
    try {
        const searchTerm = req.query.search.toLowerCase(); 
        const cars = await Car.find();

        const filteredCars = cars.filter(car => 
            car.brand.toLowerCase().includes(searchTerm)
        );

        res.status(200).json(filteredCars);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

export const updateCar = async (req, res) => {
    const {horsepower, torque, top_speed, acceleration, bio, 
        brand, car_model, production_year, body_style, engine, transmission, 
        drive_type, exterior_color, interior_color, fuel_type, seat_capacity, 
        cargo_space, audio_system, price, quantity, warranty} = req.body;
    const {images} = req.body;
    const carId = req.params.id;
    try {
        let car = await Car.findById(carId);
        if(!car) {
            return res.status(404).json({ message: "Car not found" });
        }

        if(images) {
            const promises = images.map(image => cloudinary.uploader.upload(image));
            const results = await Promise.all(promises);
            req.body.images = results.map(result => result.secure_url);
        }

        car.horsepower = horsepower || car.horsepower;
        car.torque = torque || car.torque;
        car.top_speed = top_speed || car.top_speed;
        car.acceleration = acceleration || car.acceleration;
        car.bio = bio || car.bio;
        car.brand = brand || car.brand;
        car.car_model = car_model || car.car_model;
        car.production_year = production_year || car.production_year;
        car.body_style = body_style || car.body_style;
        car.engine = engine || car.engine;
        car.transmission = transmission || car.transmission;
        car.drive_type = drive_type || car.drive_type;
        car.exterior_color = exterior_color || car.exterior_color;
        car.interior_color = interior_color || car.interior_color;
        car.fuel_type = fuel_type || car.fuel_type;
        car.seat_capacity = seat_capacity || car.seat_capacity;
        car.cargo_space = cargo_space || car.cargo_space;
        car.audio_system = audio_system || car.audio_system;
        car.price = price || car.price;
        car.quantity = quantity || car.quantity;
        car.warranty = warranty || car.warranty;

        await car.save();

        res.status(200).json(car);
    } catch(error) {
        console.log("Error in updateCar controller: ", error);
        res.status(500).json({ message: "Internal Server error" });
    }
}

export const getPhobertPrediction = async (req, res) => {
    try{
        const {text} = req.body;
        const response = await axios.post('http://localhost:5001/api/v1/phobert/get_predict', { content: text });
        const prediction = response.data.prediction[0][1] > response.data.prediction[0][0] ? "Positive" : "Negative";
        res.status(200).json({ prediction });
    } catch (error) {
        console.log("Error in phobert middleware", error.message);
        res.status(500).json({ error: "Internal server error. Please try again later!" });
    }
}

export const getMostRatedCar = async (req, res) => {
    try {
        const cars = await Car.find();
        const carsWithReviews = cars.filter(
            (car) => car.user_review && car.user_review.length > 0
        );
        // Get 8 cars with the positive ratio of reviews
        const mostRatedCars = carsWithReviews
            .sort((a, b) => {
                const positiveReviews = a.user_review.filter(
                    (review) => review.rated === "Positive"
                ).length;
                const negativeReviews = b.user_review.filter(
                    (review) => review.rated === "Negative"
                ).length;
                return positiveReviews / (positiveReviews + negativeReviews);
            })
            .slice(0, 8);

        res.status(200).json(mostRatedCars);

    } catch (error) {
        console.log("Error in getMostRatedCar controller", error.message);
        res.status(500).json({ error: "Something went wrong" });
    }
};
