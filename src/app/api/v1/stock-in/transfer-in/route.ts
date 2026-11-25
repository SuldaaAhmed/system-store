// stock-in/transfer-in route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "stock-in/transfer-in GET" });
}
