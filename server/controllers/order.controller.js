import Order from "../models/order.model.js";

export const addOrderItems = async (req, res) => {
    try {
        const {
            orderId,
            shippingAddress,
            paymentMethod,
            paymentResult,
            email,
            shippingPrice,
            totalPrice,
            isPaid,
            paidAt,
            isDelivered,
            deliveredAt,
        } = req.body.info;

        const orderItems = req.body.cars;

        res.status(200).json({ message: "Order added successfully" });

    } catch(error) {
        console.log("Error in addOrderItem controller: ", error);
        res.status(500).json({ message: "Internal Server error" });
    }
};
