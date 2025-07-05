'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeProvider({ children, ...props }) {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering the theme provider on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      themes={['light', 'dark', 'system']}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

// Custom hook to use theme with type safety
export const useTheme = () => {
  const { theme, setTheme, systemTheme, resolvedTheme } = useNextTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = React.useMemo(() => {
    if (!mounted) return false;
    if (theme === 'system') {
      return systemTheme === 'dark';
    }
    return theme === 'dark';
  }, [theme, systemTheme, mounted]);

  const toggleTheme = React.useCallback(() => {
    setTheme(isDark ? 'light' : 'dark');
  }, [isDark, setTheme]);

  return {
    theme,
    setTheme,
    systemTheme,
    resolvedTheme,
    isDark,
    toggleTheme,
    mounted,
  };
};
