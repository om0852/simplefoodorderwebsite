import User from "@/models/User";
import { NextResponse } from "next/server";

export default async function POST(req) {
  try {
    const {email,password}=await req.json()
    const data = await User.findOne({ email, password });
    if (data) {
      return NextResponse.json(
        { message: "Account already exist" },
        { status: 300 }
      );
    } else {
        User.create({email,password});
      return NextResponse.json({ message: "Account created" }, { status: 200 });
    }
  } catch (error) {}
}
