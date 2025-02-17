import { NextResponse } from 'next/server';
import { getAccessToken } from '@/lib/spotify';

interface SpotifyArtist {
  name: string;
}

interface SpotifyImage {
  url: string;
}

interface SpotifyAlbum {
  images: SpotifyImage[];
}

interface SpotifyTrack {
  name: string;
  artists: SpotifyArtist[];
  id: string;
  album: SpotifyAlbum;
}

interface SpotifyPlaybackResponse {
  item: SpotifyTrack;
  is_playing: boolean;
}

export async function GET() {
  try {
    const accessToken = await getAccessToken();
    
    if (!accessToken) {
      throw new Error('Failed to get access token');
    }
    
    console.log('Access token:', accessToken.slice(0, 10) + '...');
    
    const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: { 
        Authorization: `Bearer ${accessToken}`,
      },
      cache: 'no-store'
    });

    console.log('Response status:', response.status);

    if (response.status === 401) {
      console.log('Token expired, attempting to get new token...');
      const newAccessToken = await getAccessToken();
      
      if (!newAccessToken) {
        throw new Error('Failed to get new access token');
      }

      const retryResponse = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: { 
          Authorization: `Bearer ${newAccessToken}`,
        },
        cache: 'no-store'
      });

      if (!retryResponse.ok) {
        const errorText = await retryResponse.text();
        console.error('Retry failed:', errorText);
        throw new Error(`Spotify API retry failed: ${retryResponse.status} ${errorText}`);
      }

      const retryData = await retryResponse.json() as SpotifyPlaybackResponse;
      return NextResponse.json({
        name: retryData.item.name,
        artist: retryData.item.artists.map(a => a.name).join(', '),
        url: retryData.item.id,
        image: retryData.item.album.images[0]?.url
      });
    }

    if (response.status === 204) {
      return NextResponse.json({ isPlaying: false });
    }

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Spotify API error:', errorText);
      throw new Error(`Spotify API error: ${response.status} ${errorText}`);
    }

    const data = await response.json() as SpotifyPlaybackResponse;
    
    return NextResponse.json({
      name: data.item.name,
      artist: data.item.artists.map(a => a.name).join(', '),
      url: data.item.id,
      image: data.item.album.images[0]?.url
    });
    
  } catch (error: any) {
    console.error('Error in current-track route:', error);
    return NextResponse.json(
      { error: `Failed to fetch track: ${error.message}` },
      { status: 500 }
    );
  }
}