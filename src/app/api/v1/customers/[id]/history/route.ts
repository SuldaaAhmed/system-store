// customers/[id]/history route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "customers/[id]/history GET" });
}
