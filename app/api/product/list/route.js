import ConnectDB from "@/config/db";
import { NextResponse } from "next/server";
import Product from "@/models/Product";

export async function GET(request) {
  try {
    await ConnectDB();

    const products = await Product.find({});
    return NextResponse.json({
      success: true,
      products: products,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
