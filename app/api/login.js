import User from "@/models/User";
import { NextResponse } from "next/server";

export default async function POST(req) {
  try {
    const {email,password}=await req.json()
    const data = await User.findOne({ email, password });
    if (data) {
      return NextResponse.json(
        { message: "Login Successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ message: "Login Failed" }, { status: 300 });
    }
  } catch (error) {}
}
