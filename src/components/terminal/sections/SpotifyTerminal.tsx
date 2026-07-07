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
          <Disc3 className="h-5 w-5 animate-spin text-terminal-prompt" aria-hidden="true" />
          <span>fetching spotify data...</span>
        </div>
      );
    }

    if (error || !currentlyPlaying || !currentlyPlaying.item) {
      return (
        <div className="site-song-player">
          <div className="site-cover-scene">
            <div className="site-cd" aria-hidden="true">
              <span className="site-cd-disc" />
            </div>
            <div className="site-cover-art is-placeholder">
              <Music className="site-cover-placeholder-icon text-terminal-prompt" aria-hidden="true" />
            </div>
          </div>

          <div className="site-song-copy min-w-0 space-y-3">
            <div className="flex items-center gap-2">
              <span className="site-eq" aria-hidden="true">
                <i style={{ '--site-delay': '0ms' } as React.CSSProperties} />
                <i style={{ '--site-delay': '110ms' } as React.CSSProperties} />
                <i style={{ '--site-delay': '220ms' } as React.CSSProperties} />
              </span>
              <span className="text-xs font-semibold text-terminal-muted">
                {error ? 'spotify unavailable' : 'queue idle'}
              </span>
            </div>

            <div>
              <h3 className="truncate font-semibold text-terminal-output">
                no active track
              </h3>
              <p className="truncate text-sm text-terminal-command">
                live playback appears here when available
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-10 text-xs text-terminal-muted">0:00</span>
              <div className="site-progress-track flex-1" aria-hidden="true">
                <div className="site-progress-bar" style={{ width: '0%' }} />
              </div>
              <span className="w-10 text-right text-xs text-terminal-muted">--:--</span>
            </div>
          </div>

          <span className="site-play-button opacity-60" aria-hidden="true">
            <Music className="h-4 w-4" />
          </span>
        </div>
      );
    }

    const track = currentlyPlaying.item;
    const progress = progressMs || currentlyPlaying.progress_ms || 0;
    const progressPercent = Math.min(100, Math.max(0, (progress / track.duration_ms) * 100));

    return (
      <div className={`site-song-player ${currentlyPlaying.is_playing ? 'is-playing' : ''}`}>
        <div className="site-cover-scene">
          <div className="site-cd" aria-hidden="true">
            <span className="site-cd-disc" />
          </div>
          <div className={`site-cover-art ${track.album.images[0] ? '' : 'is-placeholder'}`}>
            {track.album.images[0] ? (
              <img
                src={track.album.images[0].url}
                alt={`${track.name} album art`}
              />
            ) : (
              <Music className="site-cover-placeholder-icon text-terminal-prompt" aria-hidden="true" />
            )}
          </div>
        </div>

        <div className="site-song-copy min-w-0 space-y-3">
          <div className="flex items-center gap-2">
            <span className="site-eq" aria-hidden="true">
              <i style={{ '--site-delay': '0ms' } as React.CSSProperties} />
              <i style={{ '--site-delay': '110ms' } as React.CSSProperties} />
              <i style={{ '--site-delay': '220ms' } as React.CSSProperties} />
            </span>
            <span className="text-xs font-semibold text-terminal-success">
              {currentlyPlaying.is_playing ? 'now playing' : 'paused'}
            </span>
          </div>

          <div>
            <h3 className="truncate font-semibold text-terminal-output">
              {track.name}
            </h3>
            <p className="truncate text-sm text-terminal-command">
              {track.artists.map(a => a.name).join(', ')}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-10 text-xs text-terminal-muted">
              {formatDuration(progress)}
            </span>
            <div className="site-progress-track flex-1" aria-hidden="true">
              <div
                className="site-progress-bar"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="w-10 text-right text-xs text-terminal-muted">
              {formatDuration(track.duration_ms)}
            </span>
          </div>
        </div>

        <a
          href={track.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="site-play-button"
          aria-label={`Open ${track.name} in Spotify`}
        >
          <ExternalLink className="h-4 w-4" />
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
