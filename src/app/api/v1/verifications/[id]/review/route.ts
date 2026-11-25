// verifications/[id]/review route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "verifications/[id]/review GET" });
}
