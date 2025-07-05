import { siteConfig } from '@/config/site';

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: [
    'portfolio',
    'web developer',
    'full stack developer',
    'next.js',
    'react',
    'javascript',
    'typescript',
    'node.js',
    'frontend developer',
    'software engineer',
    siteConfig.name,
  ],
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    title: 'Alain Ndizeye | Portfolio',
    description: 'Personal portfolio of Alain Ndizeye - Web Developer',
    creator: '@yourtwitter',
  },
};
