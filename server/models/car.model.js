import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
	{
		bio: {
			type: String,
			required: true,
		},
		brand: {
			type: String,
			required: true,
		},
		car_model: {
			type: String,
			required: true,
		},
		production_year: {
			type: String,
			required: true,
		},
		body_style: {
			type: String,
			required: true,
		},
		engine: {
			type: String,
			required: true,
		},
		transmission: {
			type: String,
			required: true,
		},
		drive_type: {
			type: String,
			required: true,
		},
		exterior_color: {
			type: String,
			required: true,
		},
		interior_color: {
			type: String,
			required: true,
		},
		fuel_type: {
			type: String,
			required: true,
		},
		horsepower: {
			type: String,
			required: true,
		},
		torque: {
			type: String,
			required: true,
		},
		top_speed: {
			type: String,
			required: true,
		},
		acceleration: {
			type: String,
			required: true,
		},
		seat_capacity: {
			type: String,
			required: true,
		},
		cargo_space: {
			type: String,
			required: true,
		},
		audio_system: {
			type: String,
			required: true,
		},
		user_review: [
			{
				rating: {
					type: String,
				},
				text: {
					type: String,
				},
				user: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "User",
				},
			},
		],
		price: {
			type: String,
			required: true,
		},
		quantity: {
			type: String,
			required: true,
		},
		warranty: {
			type: String,
			required: true,
		},
		images: [
			{
				type: String,
				required: true,
			}
		]
	},
	{ timestamps: true }
); 

const Car = mongoose.model("Car", carSchema); 

export default Car;
