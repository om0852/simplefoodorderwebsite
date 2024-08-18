import { NextResponse } from "next/server";
import twilio from "twilio";
export async function POST(req) {
  try {
    const {to}=await req.json()
    const client = new twilio(process.env.A_SID, process.env.A_TOKEN);
    const generateOtp = () => {
      return Math.floor(100000 + Math.random() * 900000);
    };
    const otp=generateOtp()
    client.messages.create({
      body: `Your otp is ${otp}`,
      from: "+12564089658",
      to: `+91${to}`,
    });
    return NextResponse.json({ message: "Sent otp" ,otp:otp});
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
