import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Music, ExternalLink, Copy, Check } from 'lucide-react';

const SpotifyTokenHelper: React.FC = () => {
  const [authCode, setAuthCode] = useState<string>('');
  const [refreshToken, setRefreshToken] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const clientId = 'b92c6db5b91c4162af45f0cb8cbe3760';
  const [localIp, setLocalIp] = useState<string>(''); // Empty for ngrok
  const [ngrokUrl, setNgrokUrl] = useState<string>(''); // For ngrok HTTPS
  const scope = 'user-read-currently-playing';

  // Get redirect URI based on ngrok URL or IP - add /spotify-helper for redirect
  const redirectUri = ngrokUrl ? `${ngrokUrl}/spotify-helper` : (localIp ? `http://${localIp}:8080/spotify-helper` : '');

  const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}`;

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const exchangeCodeForToken = async () => {
    if (!authCode) {
      setError('Please enter the authorization code');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa(`${clientId}:17f4505cf0f642b79f37fbb328cc571c`)
        },
        body: `grant_type=authorization_code&code=${authCode}&redirect_uri=${redirectUri}`
      });

      const data = await response.json();

      if (response.ok) {
        setRefreshToken(data.refresh_token);
      } else {
        setError(data.error_description || 'Failed to exchange code for token');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check if we have an auth code in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      setAuthCode(code);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Music className="h-5 w-5 text-green-500" />
              <span>Spotify API Setup Helper</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Step 1: Choose Connection Method</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Spotify requires HTTPS. Use ngrok for secure tunneling (recommended):
                </p>
                
                <div className="bg-gray-800 p-3 rounded mb-4">
                  <p className="text-sm text-gray-300 mb-2"><strong>Method 1: ngrok (Recommended)</strong></p>
                  <code className="bg-gray-700 px-2 py-1 rounded text-xs block mb-2">npm install -g ngrok</code>
                  <code className="bg-gray-700 px-2 py-1 rounded text-xs block mb-2">npm run dev</code>
                  <code className="bg-gray-700 px-2 py-1 rounded text-xs block">ngrok http 8080</code>
                  <p className="text-sm text-gray-300 mt-2">Then copy the ngrok HTTPS URL below</p>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    ngrok HTTPS URL (recommended):
                  </label>
                  <Input
                    placeholder="https://abc123def.ngrok.io"
                    value={ngrokUrl}
                    onChange={(e) => setNgrokUrl(e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white mb-2"
                  />
                </div>
                
                <div className="bg-gray-800 p-3 rounded mb-4">
                  <p className="text-sm text-gray-300 mb-2"><strong>Method 2: Local IP (HTTP)</strong></p>
                  <p className="text-sm text-gray-300 mb-2">Note: Spotify may reject HTTP connections</p>
                  <code className="bg-gray-700 px-2 py-1 rounded text-xs">ipconfig | findstr "IPv4"</code>
                </div>
                
                <div className="flex space-x-2 mb-4">
                  <Input
                    placeholder="Enter your local IP (e.g., 192.168.1.100)"
                    value={localIp}
                    onChange={(e) => setLocalIp(e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                  <Badge variant="secondary" className="bg-purple-600">
                    {redirectUri || 'Enter URL above'}
                  </Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Step 2: Authorize Spotify Access</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Click the button below to authorize Spotify to access your currently playing track.
                </p>
                <Button 
                  onClick={() => window.open(authUrl, '_blank')}
                  disabled={!redirectUri}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Authorize with Spotify
                </Button>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Step 3: Get Authorization Code</h3>
                <p className="text-sm text-gray-400 mb-4">
                  After authorizing, you'll be redirected to your site. Copy the <code className="bg-gray-700 px-1 rounded">code</code> parameter from the URL and paste it below:
                </p>
                <Input
                  placeholder="Paste authorization code here"
                  value={authCode}
                  onChange={(e) => setAuthCode(e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Step 4: Exchange for Refresh Token</h3>
                <Button 
                  onClick={exchangeCodeForToken}
                  disabled={loading || !authCode}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  {loading ? 'Exchanging...' : 'Get Refresh Token'}
                </Button>
              </div>

              {error && (
                <div className="bg-red-900/20 border border-red-700 rounded p-3">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              {refreshToken && (
                <div className="bg-green-900/20 border border-green-700 rounded p-4">
                  <h3 className="text-lg font-semibold mb-2 text-green-400">Success! 🎉</h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Here's your refresh token. Copy this into your <code className="bg-gray-700 px-1 rounded">.env</code> file:
                  </p>
                  <div className="bg-gray-800 p-3 rounded font-mono text-sm break-all relative">
                    {refreshToken}
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(refreshToken)}
                      className="absolute top-2 right-2 text-gray-400 hover:text-white"
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Add this to your .env file as: <code className="bg-gray-700 px-1 rounded">VITE_SPOTIFY_REFRESH_TOKEN={refreshToken}</code>
                  </p>
                </div>
              )}
            </div>

            <div className="border-t border-gray-700 pt-4">
              <h3 className="text-lg font-semibold mb-2">Your Spotify App Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Client ID:</span>
                  <Badge variant="secondary">{clientId}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Redirect URI:</span>
                  <Badge variant="secondary">{redirectUri}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Scope:</span>
                  <Badge variant="secondary">{scope}</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SpotifyTokenHelper;