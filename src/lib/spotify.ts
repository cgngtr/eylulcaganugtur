import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
  clientId: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
  clientSecret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET,
  refreshToken: import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN,
});

// Interfaces for TypeScript
export interface SpotifyTrack {
  name: string;
  artists: { name: string }[];
  album: {
    name: string;
    images: { url: string }[];
  };
  external_urls: {
    spotify: string;
  };
  duration_ms: number;
  is_playing: boolean;
}

export interface SpotifyCurrentlyPlaying {
  item: SpotifyTrack;
  is_playing: boolean;
  progress_ms: number;
  timestamp: number;
}

// Get access token using client credentials flow
export const getAccessToken = async (): Promise<string> => {
  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(`${import.meta.env.VITE_SPOTIFY_CLIENT_ID}:${import.meta.env.VITE_SPOTIFY_CLIENT_SECRET}`)
      },
      body: 'grant_type=client_credentials'
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
};

// Get currently playing track using refresh token
export const getCurrentlyPlaying = async (): Promise<SpotifyCurrentlyPlaying | null> => {
  try {
    // First, get a new access token using refresh token
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(`${import.meta.env.VITE_SPOTIFY_CLIENT_ID}:${import.meta.env.VITE_SPOTIFY_CLIENT_SECRET}`)
      },
      body: 'grant_type=refresh_token&refresh_token=' + import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN
    });

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Get currently playing track
    const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (response.status === 204) {
      return null; // No track currently playing
    }

    if (response.status === 401) {
      console.error('Spotify API unauthorized - check refresh token');
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error getting currently playing track:', error);
    return null;
  }
};

// Get recently played tracks
export const getRecentlyPlayed = async (limit: number = 10) => {
  try {
    const accessToken = await getAccessToken();
    
    const response = await fetch(`https://api.spotify.com/v1/me/player/recently-played?limit=${limit}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch recently played tracks');
    }

    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error('Error getting recently played tracks:', error);
    return [];
  }
};

// Format duration from milliseconds to MM:SS
export const formatDuration = (ms: number): string => {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};