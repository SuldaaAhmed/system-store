// settings/notifications route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "settings/notifications GET" });
}
