'use client';
import React, { useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Footer from "@/components/seller/Footer";
import Loading from "@/components/Loading";
import axios from "axios";
import toast from "react-hot-toast";

const Orders = () => {
    const { currency, getToken, user } = useAppContext();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchSellerOrders = async () => {
        try {
            const token = await getToken();
            const { data } = await axios.get("/api/order/seller-order", {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (data.success) {
                setOrders(data.orders);
            } else {
                toast.error(data.message || "Failed to fetch orders");
            }
        } catch (error) {
            toast.error(error.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user) fetchSellerOrders();
    }, [user]);

    return (
        <div className="flex-1 h-screen overflow-y-auto flex flex-col justify-between text-gray-200">
            {loading ? (
                <Loading />
            ) : (
                <div className="md:p-10 p-4 space-y-5">
                    <h2 className="text-2xl font-semibold text-blue-500">Your Orders</h2>

                    {orders.length === 0 ? (
                        <p className="text-gray-500">You haven't received any orders yet.</p>
                    ) : (
                        <div className="max-w-5xl divide-y divide-gray-800 rounded-md">
                            {orders.map((order, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col md:flex-row gap-5 justify-between py-6 transition hover:bg-[#1a1a1a]"
                                >
                                    {/* Order Items */}
                                    <div className="flex-1 flex gap-5 max-w-80">
                                        <Image
                                            className="w-16 h-16 object-cover"
                                            src={assets.box_icon}
                                            alt="box_icon"
                                        />
                                        <div className="flex flex-col gap-2">
                                            <span className="font-medium text-white">
                                                {order.items
                                                    .map(item => `${item.product.name} x ${item.quantity}`)
                                                    .join(", ")}
                                            </span>
                                            <span className="text-gray-400">Items: {order.items.length}</span>
                                        </div>
                                    </div>

                                    {/* Address Info */}
                                    <div className="text-gray-300 text-sm whitespace-nowrap">
                                        <p className="font-semibold text-blue-400">{order.address.fullName}</p>
                                        <p>{order.address.area}</p>
                                        <p>{order.address.city}, {order.address.state}</p>
                                        <p>{order.address.phoneNumber}</p>
                                    </div>

                                    {/* Price */}
                                    <p className="font-semibold text-white my-auto whitespace-nowrap">
                                        {currency}{order.amount}
                                    </p>

                                    {/* Extra Info */}
                                    <div className="text-sm text-gray-400 whitespace-nowrap">
                                        <p>Method: <span className="text-blue-500">COD</span></p>
                                        <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                                        <p>Payment: <span className="text-blue-500">Pending</span></p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
            <Footer />
        </div>
    );
};

export default Orders;
