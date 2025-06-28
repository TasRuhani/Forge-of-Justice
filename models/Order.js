import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    userId: {
        type: String,
        required: true,
    },
    items: [
        {
            productId: {
                type: String,
                required: true,
                ref: 'product',
            },
            quantity: {
                type: Number,
                required: true,
            },
        },
    ],
    amount: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        ref: 'address',
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'Order Placed',
    },
    date: {
        type: Number,
        required: true
    }
}, { timestamps: true});

const Order = mongoose.models.order || mongoose.model("Order", orderSchema);

export default Order;