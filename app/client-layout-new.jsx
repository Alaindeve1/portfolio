'use client';

import { ThemeProvider, useTheme } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { useState, useEffect } from 'react';
import { Moon, Sun, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function ClientLayout({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="relative flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <nav className="flex items-center space-x-6">
              <Link href="/" className="font-bold text-lg">
                Alain Ndizeye
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/contact">Contact</NavLink>
              </div>
            </nav>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>
        <footer className="border-t py-8">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Alain Ndizeye. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://twitter.com/yourtwitter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
      <Toaster />
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
}

function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'text-sm font-medium transition-colors hover:text-foreground',
        isActive ? 'text-foreground' : 'text-muted-foreground'
      )}
    >
      {children}
    </Link>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="h-10 w-10 rounded-md border p-2">
        <Sun className="h-4 w-4" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="h-10 w-10 rounded-md border p-2 hover:bg-accent hover:text-accent-foreground transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </button>
  );
}
