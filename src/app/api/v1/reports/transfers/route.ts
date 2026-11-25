// reports/transfers route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "reports/transfers GET" });
}
