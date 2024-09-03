import Order from "../models/order.model.js";
import Car from "../models/car.model.js";

export const addOrderItems = async (req, res) => {
    try {
        const {
            orderId,
            address: shippingAddress,
            paymentMethod,
            paymentResult,
            email,
            totalPrice,
            isPaid,
            paidAt,
            isDelivered,
            deliveredAt,
        } = req.body.info;
        let { shippingCost: shippingPrice } = req.body.info;
        shippingPrice = Math.round(shippingPrice);

        const orderItems = req.body.cars.map((item) => {
            return {
                carId: item.id,
                brand: item.brand,
                model: item.model,
                price: item.price,
                quantity: item.quantity,
                total: item.total,
            };
        });

        const order = new Order({
            user: req.user._id,
            orderId,
            orderItems,
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
        });
        await order.save();
        res.status(200).json({ message: "Order added successfully" });
        // res.status(200).json(order);

    } catch(error) {
        console.log("Error in addOrderItem controller: ", error);
        res.status(500).json({ message: "Internal Server error" });
    }
};
