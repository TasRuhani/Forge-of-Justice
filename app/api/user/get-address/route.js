import { getAuth } from "@clerk/nextjs/server";
import Address from "@/models/Address";
import ConnectDB from "@/config/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { userId } = getAuth(request);
    if (!userId) {
      return NextResponse.json(
        { success: false, message: "User not authenticated" },
        { status: 401 }
      );
    }

    await ConnectDB();
    const addresses = await Address.find({ userId });

    return NextResponse.json({ success: true, addresses }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || "An error occurred while fetching addresses",
      },
      { status: 500 }
    );
  }
}
