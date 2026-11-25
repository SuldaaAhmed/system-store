// notifications/[id] route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "notifications/[id] GET" });
}
