// roles/[id] route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "roles/[id] GET" });
}
