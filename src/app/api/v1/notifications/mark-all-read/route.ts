// notifications/mark-all-read route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "notifications/mark-all-read GET" });
}
