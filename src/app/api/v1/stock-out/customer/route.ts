// stock-out/customer route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "stock-out/customer GET" });
}
