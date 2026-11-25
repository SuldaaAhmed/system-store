// stock-out/transfer-out route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "stock-out/transfer-out GET" });
}
