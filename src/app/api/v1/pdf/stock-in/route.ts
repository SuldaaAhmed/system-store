// pdf/stock-in route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "pdf/stock-in GET" });
}
