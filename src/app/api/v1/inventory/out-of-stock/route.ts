// inventory/out-of-stock route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "inventory/out-of-stock GET" });
}
