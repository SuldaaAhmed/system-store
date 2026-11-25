// stock-in/customer-return route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "stock-in/customer-return GET" });
}
