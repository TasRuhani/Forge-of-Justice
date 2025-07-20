"use client";
import React, { useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";
import axios from "axios";
import toast from "react-hot-toast";

const MyOrders = () => {
  const { currency, getToken, user } = useAppContext();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get("/api/order/list", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (data.success) {
        setOrders(data.orders.reverse());
        setLoading(false);
      } else {
        toast.error(data.message || "Failed to fetch orders");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-between px-6 md:px-16 lg:px-32 py-6 min-h-screen bg-[#0e0f11] text-gray-100">
        <div className="space-y-5">
          <h2 className="text-lg font-semibold mt-6 text-blue-400">
            My Orders
          </h2>

          {loading ? (
            <Loading />
          ) : orders.length === 0 ? (
            <p className="text-gray-400 text-sm">You have no orders yet.</p>
          ) : (
            <div className="max-w-5xl border-t border-gray-700 text-sm">
              {orders.map((order) => (
                <div
                  key={order._id}
                  className="flex flex-col md:flex-row gap-5 justify-between p-5 border-b border-gray-700"
                >
                  <div className="flex-1 flex gap-5 max-w-80">
                    <Image
                      className="w-16 h-16 object-cover bg-white p-1 rounded"
                      src={assets.box_icon}
                      alt="box_icon"
                    />
                    <div className="flex flex-col gap-3">
                      <span className="font-medium text-base text-blue-300">
                        {Array.isArray(order.items) && order.items.length > 0
                          ? order.items
                              .filter((item) => item.product)
                              .map(
                                (item) =>
                                  `${item.product.name} x ${item.quantity}`
                              )
                              .join(", ")
                          : "No items found"}
                      </span>
                      <span className="text-gray-400">
                        Items: {order.items.length}
                      </span>
                    </div>
                  </div>

                  <div className="min-w-[140px] text-gray-300">
                    <p>
                      <span className="font-medium text-blue-300">
                        {order.address.fullName}
                      </span>
                      <br />
                      <span>{order.address.area}</span>
                      <br />
                      <span>{`${order.address.city}, ${order.address.state}`}</span>
                      <br />
                      <span>{order.address.phoneNumber}</span>
                    </p>
                  </div>

                  <p className="font-semibold my-auto whitespace-nowrap text-blue-400">
                    {currency}
                    {order.amount}
                  </p>

                  <div className="min-w-[140px] text-sm text-gray-400">
                    <p className="flex flex-col gap-1">
                      <span>Method: {order.paymentMethod || "COD"}</span>
                      <span>
                        Date:{" "}
                        {new Date(order.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span>
                        Payment:{" "}
                        <span
                          className={
                            order.paymentStatus === "Paid"
                              ? "text-green-400 font-semibold"
                              : "text-yellow-400 font-semibold"
                          }
                        >
                          {order.paymentStatus || "Pending"}
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyOrders;
