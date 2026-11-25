// deliveries/staff route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "deliveries/staff GET" });
}
