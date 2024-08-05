import env from "dotenv";
import axios from "axios";

env.config();

export const phobert = async (req, res, next) => {
    try {
        const {text, rating} = req.body;
        // get AI api
        const response = await axios.post('http://localhost:5001/api/v1/phobert/get_predict', { content: text });

        const prediction = response.data.prediction[0][1];

        const overallRating = rating * prediction;

        res.status(200).json({ prediction, overallRating });
    } catch (error) {
        console.log("Error in phobert middleware", error.message);
        res.status(500).json({ error: "Something went wrong in phobert" });
    }
};