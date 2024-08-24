import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(){
    const data = await Product.find()
    return NextResponse.json({data});
}
export async function POST(req){
    const {title,price}=await req.json();
    await Product.create({title,price});
    return NextResponse.json({message:"Created"})
}