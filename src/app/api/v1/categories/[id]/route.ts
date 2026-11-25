// categories/[id] route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "categories/[id] GET" });
}
