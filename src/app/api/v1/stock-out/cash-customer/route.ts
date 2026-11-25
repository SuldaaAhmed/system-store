// stock-out/cash-customer route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "stock-out/cash-customer GET" });
}
