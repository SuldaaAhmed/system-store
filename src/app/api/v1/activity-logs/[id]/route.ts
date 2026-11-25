// activity-logs/[id] route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "activity-logs/[id] GET" });
}
