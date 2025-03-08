import { withAuth } from "@middleware/auth";
import { NextRequest, NextResponse } from "next/server";

import { findUserById } from "@/lib/user";

async function handler(req: NextRequest, context?: any) {
  const userId = context.user.id;

  const user = await findUserById(userId);

  return NextResponse.json({ message: "Profile", user: user }, { status: 200 });
}

export const GET = withAuth(handler);
