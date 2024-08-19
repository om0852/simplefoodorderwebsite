import { NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(req) {
  try {
    const { to } = await req.json();

    // Log environment variables to ensure they're being accessed correctly
    console.log("Twilio SID:", process.env.A_SID);
    console.log("Twilio Token:", process.env.A_TOKEN);

    // Ensure the environment variables are defined
    if (!process.env.A_SID || !process.env.A_TOKEN) {
      throw new Error("Twilio credentials are not set properly.");
    }

    const client = new twilio(process.env.A_SID, process.env.A_TOKEN);

    const generateOtp = () => {
      return Math.floor(100000 + Math.random() * 900000);
    };

    const otp = generateOtp();

    await client.messages.create({
      body: `Your OTP is ${otp}`,
      from: "+12564089658", // Make sure this number is a valid Twilio number
      to: `+91${to}`,
    });

    return NextResponse.json(
      { message: "Sent OTP SUCCESSFULLY", otp: otp },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending OTP:", error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
