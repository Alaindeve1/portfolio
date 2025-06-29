'use client';

import { useEffect, useState } from 'react';
import { useTheme as useNextTheme } from 'next-themes';

export function useTheme() {
  const { theme, setTheme, systemTheme, resolvedTheme, themes } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  // Return the current theme or system theme if not set
  const currentTheme = theme === 'system' ? systemTheme : theme;

  // Toggle between light and dark theme
  const toggleTheme = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  return {
    theme: currentTheme,
    setTheme,
    systemTheme,
    resolvedTheme,
    themes,
    toggleTheme,
    mounted,
    isDark: currentTheme === 'dark',
  };
}
