// reports/stock-in route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "reports/stock-in GET" });
}
