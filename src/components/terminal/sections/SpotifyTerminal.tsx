import React, { useState, useEffect } from 'react';
import { TerminalCard } from '../index';
import { Music, Disc3, ExternalLink } from 'lucide-react';
import { getCurrentlyPlaying, formatDuration, type SpotifyCurrentlyPlaying } from '@/lib/spotify';

const SpotifyTerminal: React.FC = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<SpotifyCurrentlyPlaying | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [progressMs, setProgressMs] = useState<number>(0);

  const fetchCurrentlyPlaying = async () => {
    try {
      const data = await getCurrentlyPlaying();
      setCurrentlyPlaying(data);
      setError(null);
    } catch (err) {
      setError('Unable to fetch Spotify data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentlyPlaying();
    const interval = setInterval(fetchCurrentlyPlaying, 5000);
    return () => clearInterval(interval);
  }, []);

  // Update progress every second
  useEffect(() => {
    if (currentlyPlaying?.is_playing && currentlyPlaying?.item) {
      const startTime = Date.now() - (currentlyPlaying.progress_ms || 0);
      const duration = currentlyPlaying.item.duration_ms;

      const progressInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        setProgressMs(Math.min(elapsed, duration));
      }, 1000);

      return () => clearInterval(progressInterval);
    }
  }, [currentlyPlaying]);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex items-center gap-3 text-terminal-muted">
          <Disc3 className="w-5 h-5 animate-spin" />
          <span>fetching spotify data...</span>
        </div>
      );
    }

    if (error || !currentlyPlaying || !currentlyPlaying.item) {
      return (
        <div className="space-y-4">
          <div className="text-terminal-muted">
            not playing any music right now.
          </div>
          <div className="text-terminal-output/60 text-sm">
            <span className="text-terminal-keyword">recent tracks</span>
            <div className="mt-2 space-y-1 pl-2">
              <div className="flex items-center gap-2">
                <Music className="w-4 h-4 text-terminal-prompt" />
                <span>check back later...</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    const track = currentlyPlaying.item;
    const progress = progressMs || currentlyPlaying.progress_ms || 0;
    const progressPercent = (progress / track.duration_ms) * 100;

    return (
      <div className="space-y-4">
        {/* Track info with album art */}
        <div className="flex items-start gap-4">
          {/* Album art */}
          {track.album.images[0] && (
            <img
              src={track.album.images[0].url}
              alt={`${track.name} album art`}
              className="w-20 h-20 rounded-lg object-cover border border-terminal-border"
            />
          )}

          {/* Track details */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              {currentlyPlaying.is_playing ? (
                <Disc3 className="w-4 h-4 text-terminal-success animate-spin" style={{ animationDuration: '3s' }} />
              ) : (
                <Music className="w-4 h-4 text-terminal-muted" />
              )}
              <span className="text-xs text-terminal-success">
                {currentlyPlaying.is_playing ? 'now playing' : 'paused'}
              </span>
            </div>

            <h3 className="font-semibold text-terminal-output truncate">
              {track.name}
            </h3>
            <p className="text-terminal-command text-sm truncate">
              {track.artists.map(a => a.name).join(', ')}
            </p>
            <p className="text-terminal-muted text-xs truncate mt-1">
              {track.album.name}
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs text-terminal-muted w-10">
              {formatDuration(progress)}
            </span>
            <div className="flex-1 h-1.5 bg-terminal-bg-light rounded-full overflow-hidden">
              <div
                className="h-full bg-terminal-success rounded-full transition-all duration-1000"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-xs text-terminal-muted w-10 text-right">
              {formatDuration(track.duration_ms)}
            </span>
          </div>
        </div>

        {/* Spotify link */}
        <a
          href={track.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-terminal-directory hover:text-terminal-command transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          open in spotify
        </a>
      </div>
    );
  };

  return (
    <TerminalCard command="sptfy --now-playing" id="spotify">
      {renderContent()}
    </TerminalCard>
  );
};

export default SpotifyTerminal;
