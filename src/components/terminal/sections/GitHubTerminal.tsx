import React, { useState, useEffect } from 'react';
import { TerminalCard } from '../index';
import { ExternalLink, Calendar, TrendingUp, Github } from 'lucide-react';
import { GithubCalendar } from '@/components/ui/github-calendar';

const GITHUB_USERNAME = 'cgngtr';
const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;

interface ContributionStats {
  total: number;
  thisYear: number;
  thisMonth: number;
  maxStreak: number;
}

const GitHubTerminal: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [stats, setStats] = useState<ContributionStats | null>(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth();

        // Fetch all years for total count
        const allResponse = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`
        );
        const allData = await allResponse.json();

        // Calculate total contributions across all years
        const total = Object.values(allData.total as Record<string, number>).reduce(
          (sum, count) => sum + count,
          0
        );

        // This year's contributions
        const thisYear = allData.total[currentYear.toString()] || 0;

        // This month's contributions
        const thisMonth = allData.contributions
          .filter((c: { date: string; count: number }) => {
            const date = new Date(c.date);
            return date.getFullYear() === currentYear && date.getMonth() === currentMonth;
          })
          .reduce((sum: number, c: { count: number }) => sum + c.count, 0);

        // Calculate max streak
        let maxStreak = 0;
        let currentStreak = 0;
        const sortedContributions = [...allData.contributions].sort(
          (a: { date: string }, b: { date: string }) =>
            new Date(a.date).getTime() - new Date(b.date).getTime()
        );

        for (const contribution of sortedContributions) {
          if (contribution.count > 0) {
            currentStreak++;
            maxStreak = Math.max(maxStreak, currentStreak);
          } else {
            currentStreak = 0;
          }
        }

        setStats({ total, thisYear, thisMonth, maxStreak });
      } catch (error) {
        console.error('Failed to fetch GitHub contributions:', error);
        setStats(null);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  return (
    <TerminalCard command="gh contributions" directory="~" id="github">
      <div className="space-y-6">
        {/* Header with GitHub link */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Github className="w-5 h-5 text-terminal-output" />
            <span className="text-terminal-command font-mono">@{GITHUB_USERNAME}</span>
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-terminal-directory hover:text-terminal-command transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            view profile
          </a>
        </div>

        {loading ? (
          <div className="flex items-center gap-3 text-terminal-muted">
            <div className="w-4 h-4 border-2 border-terminal-border border-t-terminal-prompt rounded-full animate-spin" />
            <span>loading contributions...</span>
          </div>
        ) : (
          <>
            {/* Contribution Graph */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-terminal-muted text-sm">
                <Calendar className="w-4 h-4" />
                <span>contribution activity</span>
              </div>
              <div className="border border-terminal-border rounded-lg p-4 bg-terminal-bg-light/30 overflow-x-auto">
                <GithubCalendar
                  username={GITHUB_USERNAME}
                  variant="city-lights"
                  colorSchema="green"
                  shape="rounded"
                  glowIntensity={3}
                  showTotal={false}
                  className="min-w-max"
                />
              </div>
            </div>

            {/* Stats Grid */}
            {stats && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="border border-terminal-border rounded-lg p-3 bg-terminal-bg-light/30">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-terminal-success" />
                    <span className="text-xs text-terminal-muted">total</span>
                  </div>
                  <div className="text-lg font-bold text-terminal-output font-mono">
                    {stats.total.toLocaleString()}
                  </div>
                  <div className="text-xs text-terminal-muted mt-1">contributions</div>
                </div>

                <div className="border border-terminal-border rounded-lg p-3 bg-terminal-bg-light/30">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4 text-terminal-info" />
                    <span className="text-xs text-terminal-muted">this year</span>
                  </div>
                  <div className="text-lg font-bold text-terminal-output font-mono">
                    {stats.thisYear.toLocaleString()}
                  </div>
                  <div className="text-xs text-terminal-muted mt-1">contributions</div>
                </div>

                <div className="border border-terminal-border rounded-lg p-3 bg-terminal-bg-light/30">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4 text-terminal-prompt" />
                    <span className="text-xs text-terminal-muted">this month</span>
                  </div>
                  <div className="text-lg font-bold text-terminal-output font-mono">
                    {stats.thisMonth.toLocaleString()}
                  </div>
                  <div className="text-xs text-terminal-muted mt-1">contributions</div>
                </div>

                <div className="border border-terminal-border rounded-lg p-3 bg-terminal-bg-light/30">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-terminal-constant" />
                    <span className="text-xs text-terminal-muted">max streak</span>
                  </div>
                  <div className="text-lg font-bold text-terminal-output font-mono">
                    {stats.maxStreak}
                  </div>
                  <div className="text-xs text-terminal-muted mt-1">days</div>
                </div>
              </div>
            )}

            {/* Footer note */}
            <div className="text-xs text-terminal-muted flex items-center gap-2 pt-2 border-t border-terminal-border">
              <span className="text-terminal-keyword">note:</span>
              <span>contributions include commits, pull requests, and issues</span>
            </div>
          </>
        )}
      </div>
    </TerminalCard>
  );
};

export default GitHubTerminal;

