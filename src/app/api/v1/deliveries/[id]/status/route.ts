// deliveries/[id]/status route
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "deliveries/[id]/status GET" });
}
