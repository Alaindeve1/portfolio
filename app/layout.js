import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../components/theme-provider';

// Optimize font loading with next/font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: {
    default: 'Alain Ndizeye | Portfolio',
    template: '%s | Alain Ndizeye',
  },
  description: 'Personal portfolio of Alain Ndizeye - Web Developer & Designer',
  keywords: [
    'portfolio', 
    'web developer', 
    'frontend developer', 
    'next.js', 
    'react', 
    'javascript',
    'typescript',
    'UI/UX',
    'web design'
  ],
  authors: [
    { 
      name: 'Alain Ndizeye',
      url: 'https://github.com/Alaindeve1',
    },
  ],
  creator: 'Alain Ndizeye',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Alain Ndizeye | Portfolio',
    description: 'Personal portfolio of Alain Ndizeye - Web Developer & Designer',
    siteName: 'Alain Ndizeye',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Alain Ndizeye Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alain Ndizeye | Portfolio',
    description: 'Personal portfolio of Alain Ndizeye - Web Developer & Designer',
    creator: '@alainndizeye',
    images: ['/og-image.jpg'],
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
  verification: {
    // Add your verification tokens here
    // google: 'google-site-verification=...',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className={`${inter.variable} font-sans antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <main className="flex-1">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}