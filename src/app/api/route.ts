import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name');

  const profileTitle = `${name}'s profile`;
  return NextResponse.json(profileTitle);
}

