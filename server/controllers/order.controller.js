import Order from "../models/order.model.js";
import Car from "../models/car.model.js";
import User from "../models/user.model.js";

export const getAllOrders = async (req, res) => {
    try {
        // find all order no need to populate user
        const orders = await Order.find({}).populate("user").populate("orderItems.carId");
        // const likedUser = await Post.find({}).populate("user");
        res.status(200).json(orders);
    }
    catch(error) {
        console.log("Error in getAllOrders controller: ", error);
        res.status(500).json({ message: "Internal Server error" });
    }
};

export const addOrderItems = async (req, res) => {
    try {
        const {
            orderId,
            fullName,
            address: shippingAddress,
            paymentMethod,
            paymentResult,
            email,
            phone: phoneNumber,
            totalPrice,
            isPaid,
            paidAt,
            isDelivered,
            deliveredAt,
        } = req.body.info;
        let { shippingCost: shippingPrice } = req.body.info;
        // find user with email
        const user = await User.findOne({ email });
        shippingPrice = Math.round(shippingPrice);
        const cars = Array.isArray(req.body.cars) ? req.body.cars : [req.body.cars];
        const orderItems = cars.map((item) => {
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
            user: user ? user._id : null,
            fullName,
            orderId,
            orderItems,
            shippingAddress,
            paymentMethod,
            paymentResult,
            email,
            phoneNumber,
            shippingPrice,
            totalPrice,
            isPaid,
            paidAt,
            isDelivered,
            deliveredAt,
        });
        await order.save();
        res.status(200).json({ message: "Order added successfully" });
        // res.status(200).json(req.user._id);

    } catch(error) {
        console.log("Error in addOrderItem controller: ", error);
        res.status(500).json({ message: "Internal Server error" });
    }
};

export const deleteOrder = async (req, res) => {
    try {
        const user = req.user;
        if(user.isAdmin) {
            const order = await Order.findByIdAndDelete(req.params.id);
            if(order) {
                res.status(200).json({ message: "Order deleted successfully" });
            } else {
                res.status(404).json({ message: "Order not found" });
            }
        }
    } catch (error) {
        console.log("Error in deleteOrder controller: ", error);
        res.status(500).json({ message: "Internal Server error" });
    }
}

export const getOnDeliveyUserOrders = async (req, res) => {
    try {
        const user = req.user;
        const orders = await Order.find({ isDelivered: false, isCancelled: false, paymentMethod: "Visa" , user: user._id }).populate("user").populate("orderItems.carId");
        res.status(200).json(orders);
    } catch (error) {
        console.log("Error in getUserOrders controller: ", error);
        res.status(500).json({ message: "Internal Server error" });
    }
}

export const getPlacedUserOrders = async (req, res) => {
    try {
        const user = req.user;
        const orders = await Order.find({ isDelivered: false, isCancelled: false, paymentMethod: "Direct" , user: user._id }).populate("user").populate("orderItems.carId");
        res.status(200).json(orders);
    } catch (error) {
        console.log("Error in getUserOrders controller: ", error);
        res.status(500).json({ message: "Internal Server error" });
    }
}


export const getCompletedUserOrders = async (req, res) => {
    try {
        const user = req.user;
        const orders = await Order.find({ isDelivered: true, user: user._id }).populate("user").populate("orderItems.carId");
        res.status(200).json(orders);
    } catch (error) {
        console.log("Error in getUserOrders controller: ", error);
        res.status(500).json({ message: "Internal Server error" });
    }
}

export const getCancelledOrders = async (req, res) => {
    try {
        const user = req.user;
        const orders = await Order.find({ isCancelled: true, user: user._id }).populate("user").populate("orderItems.carId");
        res.status(200).json(orders);
    }
    catch(error) {
        console.log("Error in getCancelledOrders controller: ", error);
        res.status(500).json({ message: "Internal Server error" });
    }
}

export const cancelUserOrder = async (req, res) => {
    try {
        const user = req.user;
        const order = await Order.findById(req.params.id);

        if(order) {
            if(order.user.toString() === user._id.toString()) {
                if(!order.isDelivered) {
                    order.isCancelled = true;
                    await order.save();
                    res.status(200).json({ message: "Order cancelled successfully" });
                } else {
                    res.status(400).json({ message: "Order already delivered" });
                }
            } else {
                res.status(400).json({ message: "You are not authorized to cancel this order" });
            }
        } else {
            res.status(404).json({ message: "Order not found" });
        }
    } catch (error) {
        console.log("Error in cancelUserOrder controller: ", error);
        res.status(500).json({ message: "Internal Server error" });
    }
}

export const changeStatusOrder = async (req, res) => {
    try {
        const user = req.user;
        if(user.isAdmin) {
            const order = await Order.findById(req.params.id);
            if(order.isCancelled) {
                res.status(404).json({ message: "Order is already cancelled" });
            }
            if(order) {
                order.isDelivered = !order.isDelivered;
                await order.save();
                res.status(200).json({ message: "Order status changed successfully" });
            } else {
                res.status(404).json({ message: "Order not found" });
            }
        } else {
            res.status(400).json({ message: "You are not authorized to change order status" });
        }
    } catch (error) {
        console.log("Error in changeStatusOrder controller: ", error);
        res.status(500).json({ message: "Internal Server error" });
    }
}
