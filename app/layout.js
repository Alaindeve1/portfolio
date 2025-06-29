import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from './client-layout-new';

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
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'text-sm font-medium transition-colors hover:text-primary',
        isActive ? 'text-primary' : 'text-muted-foreground'
      )}
    >
      {children}
    </Link>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <Laptop className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}