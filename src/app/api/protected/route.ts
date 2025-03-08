import { withAuth } from "@middleware/auth";
import { NextRequest, NextResponse } from "next/server";

async function handler(req: NextRequest) {
  return NextResponse.json(
    { message: "This is a protected endpoint" },
    { status: 200 }
  );
}

export const GET = withAuth(handler);
