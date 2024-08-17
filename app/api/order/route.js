import Order from "@/models/Order";
import { NextResponse } from "next/server";

export default async function POST(req) {
  try {
    await connectToDB();

    const { name, items, price } = await req.json();
    await Order.create({ name, items, price });
    return NextResponse.json({ message: "Order Created" }, { status: 200 });
  } catch (error) {}
}
