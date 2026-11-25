// dashboard/stock-movements route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "dashboard/stock-movements GET" });
}
