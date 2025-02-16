// app/api/auth/login/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;
  const scopes = 'user-read-currently-playing';
  
  const authUrl = new URL('https://accounts.spotify.com/authorize');
  authUrl.searchParams.append('response_type', 'code');
  authUrl.searchParams.append('client_id', clientId!);
  authUrl.searchParams.append('scope', scopes);
  authUrl.searchParams.append('redirect_uri', redirectUri!);
  
  return NextResponse.redirect(authUrl.toString());
}