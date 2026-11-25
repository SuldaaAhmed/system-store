// reports/low-stock route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "reports/low-stock GET" });
}
