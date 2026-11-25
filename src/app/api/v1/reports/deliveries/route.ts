// reports/deliveries route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "reports/deliveries GET" });
}
