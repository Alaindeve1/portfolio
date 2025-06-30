'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { siteConfig } from '../config/site';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Alain Ndizeye. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Contact"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/privacy"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}
