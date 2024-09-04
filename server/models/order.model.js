import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    carId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Car' },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    price: { type: String, required: true },
    quantity: { 
        type: Number, 
        required: true 
    },
    total: { 
        type: Number, 
        required: true 
    },
});

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            // required: true,
        },
        fullName: {
            type: String,
            default: "Guest",
        },
        orderId: {
            type: String,
            required: true,
        },
        orderItems: [ orderItemSchema ],
        shippingAddress: {
            type: String, 
            required: true,
        },
        paymentMethod: {
            type: String,
            required: true,
        },
        paymentResult: {
            type: String, 
            required: true,
        },
        email: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        shippingPrice: {
            type: Number,
            required: true,
        },
        totalPrice: {
            type: Number,
            required: true,
        },
        isPaid: {
            type: Boolean,
            required: true,
            default: false,
        },
        paidAt: {
            type: Date,
        },
        isDelivered: {
            type: Boolean,
            required: true,
            default: false,
        },
        deliveredAt: {
            type: Date,
        },
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;


