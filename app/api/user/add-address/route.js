import ConnectDB from "@/config/db";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Address from "@/models/Address";

export async function POST(request) {
  try {
    const { userId } = getAuth(request);
    if (!userId) {
      return NextResponse(
        {
          success: false,
          message: "User not authenticated",
        },
        { status: 401 }
      );
    }

    const { address } = await request.json();

    // if (
    //   !address ||
    //   !address.fullName ||
    //   !address.phoneNumber ||
    //   !address.pincode ||
    //   !address.area ||
    //   !address.city ||
    //   !address.state
    // ) {
    //   return NextResponse.json(
    //     {
    //       success: false,
    //       message: "All fields are required",
    //     },
    //     { status: 400 }
    //   );
    // }

    await ConnectDB();
    const newAddress = await Address.create({ ...address, userId });

    return NextResponse.json(
      {
        success: true,
        address: newAddress,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || "An error occurred while adding the address",
      },
      { status: 500 }
    );
  }
}
