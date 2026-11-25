// verifications/[id]/approve route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "verifications/[id]/approve GET" });
}
