// adjustments route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "adjustments GET" });
}
