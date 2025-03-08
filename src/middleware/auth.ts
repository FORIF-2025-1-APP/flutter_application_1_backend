import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@lib/auth";

type Handler = (req: NextRequest, context?: any) => Promise<NextResponse<any>>;

export const withAuth = (handler: Handler) => {
  return async (req: NextRequest, context?: any) => {
    try {
      const authHeader = req.headers.get("authorization");

      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      const token = authHeader.split(" ")[1];
      const decoded = verifyToken(token);

      if (!decoded) {
        return NextResponse.json({ error: "Invalid token" }, { status: 401 });
      }

      // context.user = decoded;

      return handler(req, context);
    } catch (error) {
      return NextResponse.json(
        { error: "Authentication failed" },
        { status: 401 }
      );
    }
  };
};
