// reservations/[id]/cancel route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "reservations/[id]/cancel GET" });
}
