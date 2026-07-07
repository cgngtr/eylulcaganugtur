// Terminal Theme Definitions
// Change ACTIVE_THEME at the bottom to switch themes

export interface TerminalTheme {
  name: string;
  bgDark: string;
  bgMedium: string;
  bgLight: string;
  prompt: string;
  directory: string;
  command: string;
  output: string;
  muted: string;
  keyword: string;
  constant: string;
  border: string;
  selection: string;
  error: string;
  warning: string;
  info: string;
  success: string;
  // GitHub chart color (hex without #)
  chartColor: string;
}

export const themes: Record<string, TerminalTheme> = {
  // Original ppy - VS Code "hi" inspired
  ppy: {
    name: 'ppy',
    bgDark: '240 18% 15%',           // #20202a
    bgMedium: '240 16% 20%',         // #2c2c3b
    bgLight: '240 13% 28%',          // #3e3e4f
    prompt: '95 38% 62%',            // #97c178 - green
    directory: '210 79% 66%',        // #61afee - blue
    command: '42 69% 65%',           // #e2ba65 - yellow
    output: '240 100% 93%',          // #d7d7ff - light purple
    muted: '240 30% 60%',             // #7878a8 - readable muted purple
    keyword: '355 65% 65%',          // #e06c75 - red-pink
    constant: '330 50% 76%',         // #dea3b7 - pink
    border: '240 10% 39%',           // #58586f
    selection: '240 14% 24%',        // #363647
    error: '354 94% 72%',            // #fb7283
    warning: '42 73% 65%',           // #e5bc66
    info: '207 74% 62%',             // #5da8e6
    success: '95 38% 62%',           // #97c178
    chartColor: '97c178',            // green
  },

  // ppy Dark - favicon-synced ink / code-blue / muted magenta system
  ppyDark: {
    name: 'ppyDark',
    bgDark: '229 19% 7%',             // ink black
    bgMedium: '229 18% 10%',          // deep blue-black card base
    bgLight: '227 22% 24%',           // sampled slate lift
    prompt: '316 28% 58%',            // muted magenta accent
    directory: '237 12% 63%',         // code-screen lavender
    command: '222 52% 86%',           // pale code text
    output: '225 40% 94%',            // cold off-white
    muted: '237 12% 63%',             // compact secondary text
    keyword: '316 28% 58%',           // avatar magenta emphasis
    constant: '300 15% 66%',          // soft purple constant
    border: '227 22% 24%',            // sampled slate border
    selection: '229 18% 15%',         // active fill
    error: '346 55% 66%',
    warning: '36 45% 66%',
    info: '221 16% 46%',
    success: '133 35% 56%',
    chartColor: 'b978a9',             // accent chart color
  },

  // Dracula - Popular dark theme with purple/pink accents
  dracula: {
    name: 'dracula',
    bgDark: '231 15% 18%',           // #282a36
    bgMedium: '232 14% 25%',         // #363949
    bgLight: '232 14% 31%',          // #44475a
    prompt: '135 94% 65%',           // #50fa7b - green
    directory: '191 97% 77%',        // #8be9fd - cyan
    command: '265 89% 78%',          // #bd93f9 - purple
    output: '60 30% 96%',            // #f8f8f2 - foreground
    muted: '225 27% 58%',            // #7a8ab8 - readable comment color
    keyword: '326 100% 74%',         // #ff79c6 - pink
    constant: '31 100% 71%',         // #ffb86c - orange
    border: '232 14% 31%',           // #44475a
    selection: '232 14% 31%',        // #44475a
    error: '0 100% 67%',             // #ff5555
    warning: '65 92% 76%',           // #f1fa8c - yellow
    info: '191 97% 77%',             // #8be9fd - cyan
    success: '135 94% 65%',          // #50fa7b - green
    chartColor: '50fa7b',            // dracula green
  },

  // Shades of Purple - Vibrant purple theme
  shadesOfPurple: {
    name: 'shadesOfPurple',
    bgDark: '245 54% 17%',           // #1e1e3f
    bgMedium: '245 45% 23%',         // #2d2b55
    bgLight: '245 40% 30%',          // #3d3a6b
    prompt: '83 100% 58%',           // #9eff28 - lime green
    directory: '195 100% 70%',       // #6ad7ff - cyan
    command: '271 100% 69%',         // #b362ff - purple
    output: '0 0% 100%',             // #ffffff - white
    muted: '245 30% 65%',            // #9090b8 - readable muted purple
    keyword: '344 100% 65%',         // #ff628c - pink
    constant: '36 100% 50%',         // #ff9d00 - orange
    border: '245 35% 35%',           // #4d4a7a
    selection: '245 40% 30%',        // #3d3a6b
    error: '0 100% 67%',             // #ff5555
    warning: '48 100% 50%',          // #fad000 - yellow
    info: '195 100% 70%',            // #6ad7ff - cyan
    success: '83 100% 58%',          // #9eff28 - lime green
    chartColor: '9eff28',            // lime green
  },

  // Ayu Dark - Near black with warm orange/cyan accents
  ayuDark: {
    name: 'ayuDark',
    bgDark: '210 30% 4%',            // #0a0e14 - almost black
    bgMedium: '210 25% 8%',          // #0d1117
    bgLight: '210 20% 13%',          // #151d27
    prompt: '35 100% 50%',           // #ff9d00 - orange
    directory: '190 80% 55%',        // #39bae6 - cyan
    command: '35 100% 65%',          // #ffb454 - light orange
    output: '220 15% 85%',           // #cccac2 - warm gray
    muted: '220 10% 50%',            // #6c7380 - muted gray
    keyword: '35 100% 50%',          // #ff9d00 - orange
    constant: '280 60% 65%',         // #d2a6ff - purple
    border: '210 20% 18%',           // #1f2a36
    selection: '210 25% 15%',        // #1a2332
    error: '0 80% 60%',              // #e65050
    warning: '35 100% 50%',          // #ff9d00
    info: '190 80% 55%',             // #39bae6
    success: '80 60% 50%',           // #7fd962
    chartColor: 'ff9d00',            // orange
  },

  // Tokyo Night - Near black with purple/blue neon accents
  tokyoNight: {
    name: 'tokyoNight',
    bgDark: '235 25% 13%',           // #1a1b26 - near black
    bgMedium: '235 20% 17%',         // #24283b
    bgLight: '235 18% 22%',          // #2f3549
    prompt: '158 60% 52%',           // #41a6b5 - teal
    directory: '218 90% 75%',        // #7aa2f7 - blue
    command: '267 84% 81%',          // #bb9af7 - purple
    output: '225 27% 80%',           // #a9b1d6 - light blue-gray
    muted: '225 20% 55%',            // #737aa2 - muted blue
    keyword: '340 95% 72%',          // #f7768e - pink
    constant: '35 90% 65%',          // #e0af68 - orange
    border: '235 18% 25%',           // #3b4261
    selection: '235 20% 20%',        // #2d3250
    error: '340 95% 72%',            // #f7768e
    warning: '35 90% 65%',           // #e0af68
    info: '218 90% 75%',             // #7aa2f7
    success: '158 60% 52%',          // #41a6b5
    chartColor: '7aa2f7',            // blue
  },

  // GitHub Dark - True near-black with blue/green accents
  githubDark: {
    name: 'githubDark',
    bgDark: '215 28% 5%',            // #0d1117 - almost black
    bgMedium: '215 22% 10%',         // #161b22
    bgLight: '215 18% 16%',          // #21262d
    prompt: '140 60% 50%',           // #3fb950 - green
    directory: '212 100% 67%',       // #58a6ff - blue
    command: '212 100% 67%',         // #58a6ff - blue
    output: '210 17% 82%',           // #c9d1d9 - light gray
    muted: '215 14% 45%',            // #6e7681 - muted gray
    keyword: '340 80% 65%',          // #ff7b72 - coral
    constant: '212 100% 67%',        // #58a6ff - blue
    border: '215 18% 20%',           // #30363d
    selection: '215 20% 18%',        // #264f78
    error: '0 75% 60%',              // #da3633
    warning: '40 90% 55%',           // #d29922
    info: '212 100% 67%',            // #58a6ff
    success: '140 60% 50%',          // #3fb950
    chartColor: '3fb950',            // green
  },

  // One Dark - Near black with balanced syntax colors
  oneDark: {
    name: 'oneDark',
    bgDark: '220 13% 12%',           // #1e2127 - near black
    bgMedium: '220 13% 16%',         // #282c34
    bgLight: '220 12% 22%',          // #353b45
    prompt: '95 40% 55%',            // #98c379 - green
    directory: '207 82% 66%',        // #61afef - blue
    command: '286 60% 67%',          // #c678dd - purple
    output: '219 14% 76%',           // #abb2bf - light gray
    muted: '220 10% 50%',            // #5c6370 - comment gray
    keyword: '286 60% 67%',          // #c678dd - purple
    constant: '29 54% 61%',          // #d19a66 - orange
    border: '220 12% 25%',           // #3e4451
    selection: '220 13% 20%',        // #2c323c
    error: '355 65% 65%',            // #e06c75 - red
    warning: '39 67% 69%',           // #e5c07b - yellow
    info: '207 82% 66%',             // #61afef - blue
    success: '95 40% 55%',           // #98c379 - green
    chartColor: '98c379',            // green
  },

  // Hacker - Pure black with classic green terminal
  hacker: {
    name: 'hacker',
    bgDark: '0 0% 0%',               // #000000 - pure black
    bgMedium: '0 0% 5%',             // #0d0d0d
    bgLight: '0 0% 10%',             // #1a1a1a
    prompt: '120 100% 50%',          // #00ff00 - bright green
    directory: '120 80% 45%',        // #1db91d - green
    command: '120 100% 50%',         // #00ff00 - bright green
    output: '120 60% 75%',           // #90ee90 - light green
    muted: '120 30% 45%',            // #558855 - muted green
    keyword: '120 100% 50%',         // #00ff00 - bright green
    constant: '120 80% 60%',         // #33cc33 - green
    border: '120 50% 20%',           // #1a4d1a
    selection: '120 50% 15%',        // #133d13
    error: '0 100% 50%',             // #ff0000
    warning: '60 100% 50%',          // #ffff00
    info: '180 100% 50%',            // #00ffff
    success: '120 100% 50%',         // #00ff00
    chartColor: '00ff00',            // green
  },
} as const;

export type ThemeName = keyof typeof themes;

// ============================================
// CHANGE THIS TO SWITCH THEMES
// Options: 'ppy' | 'ppyDark' | 'dracula' | 'shadesOfPurple' | 'ayuDark' | 'tokyoNight' | 'githubDark' | 'oneDark' | 'hacker'
// ============================================
export const ACTIVE_THEME: ThemeName = 'ppyDark';
