// stock-out/sample route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "stock-out/sample GET" });
}
