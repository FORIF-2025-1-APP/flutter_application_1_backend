import { NextResponse } from 'next/server';
import { withAuth } from '@middleware/auth';

async function secretGET() {
  return NextResponse.json({ message: "Forif Flutter Project Sample API" });
}

export const GET = withAuth(secretGET);
