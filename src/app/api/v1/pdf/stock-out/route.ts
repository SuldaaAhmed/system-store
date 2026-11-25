// pdf/stock-out route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "pdf/stock-out GET" });
}
