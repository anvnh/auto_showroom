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

        const {text, rating} = req.body;
        const carId = req.params.id;
        const userId = req.user._id;

        if(!text) {
            return res.status(400).json({ message: "Text field is required" });
        }

        if(!rating) {
            return res.status(400).json({ message: "Rating field is required" });
        }

        const car = await Car.findById(carId);

        if(!car) {
            return res.status(404).json({ message: "Car not found" });
        }

        const comment = {rating, text, user: userId }
        const updatedComments = comment;

        car.user_review.push(comment);

        await car.save();

        // save notification about comment to the creator of the post
        // const newNotification = new Notification({
        //     type: "comment", 
        //     from: req.user._id,
        //     to: userToModify._id,
        // });

        // await newNotification.save();

        res.status(201).json(updatedComments);

    } catch(error) {
        console.log("Error in commentOnPost controller: ", error);
        res.status(500).json({ message: "Internal Server error" });
    }
};

export const getSuggestedCars = async (req, res) => {
    try {
        const cars = await Car.find(); 
        const carsWithReviews = cars.filter(
            (car) => car.user_review && car.user_review.length > 0
        );
        const suggestedCars = carsWithReviews
            .sort((a, b) => b.user_review.length - a.user_review.length)
            .slice(0, 5);
        res.status(200).json(suggestedCars);
    } catch (error) {
        console.log("Error in getSuggestedCars controller", error.message); 
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