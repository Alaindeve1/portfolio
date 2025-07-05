'use client';

import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';

export default function SEO({ title, description, image, type = 'website' }) {
  const pathname = usePathname();
  const pageTitle = title ? `${title} | ${siteConfig.title}` : siteConfig.title;
  const pageDescription = description || siteConfig.description;
  const pageImage = image || `${siteConfig.url}/og-image.png`;
  const canonicalUrl = `${siteConfig.url}${pathname}`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:site_name" content={siteConfig.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:creator" content={`@${siteConfig.social.twitter}`} />
      <meta name="twitter:site" content={`@${siteConfig.social.twitter}`} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
}
