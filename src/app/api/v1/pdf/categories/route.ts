// pdf/categories route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "pdf/categories GET" });
}
