// reports/damaged-products route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "reports/damaged-products GET" });
}
