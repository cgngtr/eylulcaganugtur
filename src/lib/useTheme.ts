import { useLayoutEffect } from 'react';
import { themes, ACTIVE_THEME } from './themes';

/**
 * Applies the active terminal theme by setting CSS custom properties on :root
 * Call this once in the root terminal component (TerminalHome)
 */
export function useThemeInit() {
  useLayoutEffect(() => {
    const theme = themes[ACTIVE_THEME];
    const root = document.documentElement;

    // Apply all theme colors as CSS custom properties
    root.style.setProperty('--terminal-bg-dark', theme.bgDark);
    root.style.setProperty('--terminal-bg-medium', theme.bgMedium);
    root.style.setProperty('--terminal-bg-light', theme.bgLight);
    root.style.setProperty('--terminal-prompt', theme.prompt);
    root.style.setProperty('--terminal-directory', theme.directory);
    root.style.setProperty('--terminal-command', theme.command);
    root.style.setProperty('--terminal-output', theme.output);
    root.style.setProperty('--terminal-muted', theme.muted);
    root.style.setProperty('--terminal-keyword', theme.keyword);
    root.style.setProperty('--terminal-constant', theme.constant);
    root.style.setProperty('--terminal-border', theme.border);
    root.style.setProperty('--terminal-selection', theme.selection);
    root.style.setProperty('--terminal-error', theme.error);
    root.style.setProperty('--terminal-warning', theme.warning);
    root.style.setProperty('--terminal-info', theme.info);
    root.style.setProperty('--terminal-success', theme.success);
  }, []);
}

/**
 * Get the current active theme name
 */
export function getActiveThemeName(): string {
  return themes[ACTIVE_THEME].name;
}

/**
 * Get the current theme's chart color (for GitHub contribution graph)
 */
export function getChartColor(): string {
  return themes[ACTIVE_THEME].chartColor;
}
