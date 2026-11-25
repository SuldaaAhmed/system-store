// stock-in/[id] route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "stock-in/[id] GET" });
}
