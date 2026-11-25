// stock-out/[id] route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "stock-out/[id] GET" });
}
