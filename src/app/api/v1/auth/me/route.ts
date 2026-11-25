// auth/me route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "auth/me GET" });
}
