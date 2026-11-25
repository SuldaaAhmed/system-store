// stock-in/new-stock route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "stock-in/new-stock GET" });
}
