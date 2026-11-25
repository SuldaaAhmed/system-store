// inventory/low-stock route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "inventory/low-stock GET" });
}
