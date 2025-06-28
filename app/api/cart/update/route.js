import ConnectDB from "@/config/db";
import User from "@/models/User";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { userId } = getAuth(request);

     if (!userId) {
            return NextResponse.json({
                success: false,
                message: "User not authenticated"
            }, { status: 401 });
        }

    const { cartData } = await request.json();

    await ConnectDB();
    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "User not found"
      }, { status: 404 });
    }

    user.cartItems = cartData;
    await user.save();

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message
    }, { status: 500 });
  }
}
