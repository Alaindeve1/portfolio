import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Alain Ndizeye | Portfolio',
  description: 'Personal portfolio of Alain Ndizeye - Web Developer',
  keywords: ['portfolio', 'web developer', 'next.js', 'react', 'javascript'],
  authors: [{ name: 'Alain Ndizeye' }],
  creator: 'Alain Ndizeye',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-portfolio-url.com',
    title: 'Alain Ndizeye | Portfolio',
    description: 'Personal portfolio of Alain Ndizeye - Web Developer',
    siteName: 'Alain Ndizeye',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alain Ndizeye | Portfolio',
    description: 'Personal portfolio of Alain Ndizeye - Web Developer',
    creator: '@yourtwitter',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}