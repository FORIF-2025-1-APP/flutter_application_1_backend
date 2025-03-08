import { withAuth } from "@middleware/auth";
import { NextRequest, NextResponse } from "next/server";

import { findUserById } from "@/lib/user";

async function handler(req: NextRequest, context?: any) {
  const userId = context.user.id;

  try {
    const user = await findUserById(userId);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    const { password, ...userWithoutPassword } = user;

    return NextResponse.json(userWithoutPassword, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to get user" }, { status: 500 });
  }
}

export const GET = withAuth(handler);
