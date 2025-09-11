import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Music, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { getCurrentlyPlaying, formatDuration, type SpotifyCurrentlyPlaying } from '@/lib/spotify';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SpotifyNowPlaying: React.FC = () => {
  const { t } = useTranslation();
  const [currentlyPlaying, setCurrentlyPlaying] = useState<SpotifyCurrentlyPlaying | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<number>(Date.now());
  const [progressMs, setProgressMs] = useState<number>(0);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const fetchCurrentlyPlaying = async () => {
    try {
      setIsRefreshing(true);
      
      // Log current state before refresh
      if (currentlyPlaying) {
        console.log('🎵 Before refresh - Currently playing:', {
          track: currentlyPlaying.item?.name,
          artist: currentlyPlaying.item?.artists[0]?.name,
          progress: currentlyPlaying.progress_ms,
          isPlaying: currentlyPlaying.is_playing
        });
      }
      
      const data = await getCurrentlyPlaying();
      setCurrentlyPlaying(data);
      setError(null);
    } catch (err) {
      setError(t('spotify.unavailable'));
      console.error(err);
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchCurrentlyPlaying();
    
    // Refresh every 5 seconds for progress sync
    const interval = setInterval(() => {
      fetchCurrentlyPlaying();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Always use current data, just show refresh indicator
  const displayData = currentlyPlaying;

  // Update progress every second for smooth animation
  useEffect(() => {
    if (currentlyPlaying && currentlyPlaying.is_playing && currentlyPlaying.item && !isRefreshing) {
      const startTime = Date.now() - (currentlyPlaying.progress_ms || 0);
      const duration = currentlyPlaying.item.duration_ms;
      
      const progressInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const currentProgress = Math.min(elapsed, duration);
        setProgressMs(currentProgress);
        
        // If song finished, refetch
        if (currentProgress >= duration) {
          fetchCurrentlyPlaying();
        }
      }, 1000);
      
      return () => clearInterval(progressInterval);
    }
  }, [currentlyPlaying, isRefreshing]);

  const handleRefresh = () => {
    fetchCurrentlyPlaying();
  };

  if (loading) {
    return (
      <Card className="w-full">
        <CardContent className="p-3 pb-4">
          <div className="flex items-center space-x-3">
            <div className="animate-pulse bg-gray-700 rounded-full p-2">
              <Music className="h-5 w-5 text-gray-500" />
            </div>
            <div className="flex-1">
              <div className="animate-pulse bg-gray-700 h-4 rounded w-3/4 mb-2"></div>
              <div className="animate-pulse bg-gray-700 h-3 rounded w-1/2"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full">
        <CardContent className="p-3 pb-4">
          <div className="flex items-center space-x-3">
            <VolumeX className="h-5 w-5 text-red-500" />
            <div className="flex-1">
              <p className="text-sm text-gray-400">{t('spotify.unavailable')}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!displayData || !displayData.item) {
    return (
      <Card className="w-full">
        <CardContent className="p-3 pb-4">
          <div className="flex items-center space-x-3">
            <Music className="h-5 w-5 text-green-500" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-300">{t('spotify.nothing_playing')}</p>
              <p className="text-xs text-gray-500">{t('spotify.nothing_playing')}</p>
            </div>
            <button
              onClick={handleRefresh}
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              <Volume2 className="h-4 w-4" />
            </button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const track = displayData.item;
  const isPlaying = displayData.is_playing;
  const progress = formatDuration(displayData.progress_ms || 0);
  const duration = formatDuration(track.duration_ms);

  return (
    <Card className="w-full">
      <CardContent className="p-4 pb-6">
        <div className="flex items-center space-x-3">
          <div>
            {track.album.images[0] && (
              <img
                src={track.album.images[0].url}
                alt={`${track.name} album art`}
                className="w-16 h-16 rounded-lg object-cover"
              />
            )}
          </div>
          
          <div className="flex-1 min-w-0 w-40"> {/* Fixed width for text area */}
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="text-sm font-medium text-gray-300 truncate">
                {track.name}
              </h3>
              <Badge variant="secondary" className="text-xs">
                {isPlaying ? t('spotify.playing') : t('spotify.paused')}
              </Badge>
            </div>
            
            <p className="text-xs text-gray-500 truncate">
              {track.artists.map(artist => artist.name).join(', ')}
            </p>
            
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-xs text-gray-600">{formatDuration(progressMs)}</span>
              <div className="flex-1 bg-gray-700 rounded-full h-1">
                <div 
                  className="bg-green-500 h-1 rounded-full transition-all duration-1000"
                  style={{ 
                    width: `${(progressMs / track.duration_ms) * 100}%` 
                  }}
                />
              </div>
              <span className="text-xs text-gray-600">{duration}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center h-full">
            <a
              href={track.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 transition-colors"
            >
              <Music className="h-5 w-5" />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpotifyNowPlaying;