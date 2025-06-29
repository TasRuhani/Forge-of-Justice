import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Product from "@/models/Product";
import { inngest } from "@/config/inngest";
import User from "@/models/User";

export async function POST(request) {
  try {
    const { userId } = getAuth(request);
    const { address, items } = await request.json();

    if (!address || !items || items.length === 0) {
      return (
        NextResponse.json({
          success: false,
          message: "Address and items are required",
        }),
        { status: 400 }
      );
    }

    //calculate amount from items
    let amount = 0;

    for (const item of items) {
      const product = await Product.findById(item.product);
      if (!product) {
        return NextResponse.json(
          { success: false, message: "Product not found" },
          { status: 404 }
        );
      }

      amount += product.offerPrice * item.quantity;
    }

    await inngest.send({
      name: "order/created",
      data: {
        userId,
        address,
        items,
        amount: amount + Math.floor(amount * 0.02), // Adding 2% tax
        date: Date.now(),
      },
    });

    //clear user cart
    const user = await User.findById(userId);
    user.cartItems = [];
    await user.save();

    return NextResponse.json({
      success: true,
      messgae: "Order placed successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, messgae: error.message },
      { status: 500 }
    );
  }
}
