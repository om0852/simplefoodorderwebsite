import Order from "@/models/Order";
import { connectToDB } from "@/utils/connect";
import { NextResponse } from "next/server";

export  async function POST(req) {
  try {
    await connectToDB();

    const {data } = await req.json();
    console.log(data)
    await Order.create({ data });
    return NextResponse.json({ message: "Order Created" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 200 });

  }
}
