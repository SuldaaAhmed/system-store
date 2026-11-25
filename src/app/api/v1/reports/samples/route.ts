// reports/samples route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "reports/samples GET" });
}
