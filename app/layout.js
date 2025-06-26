import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            My Portfolio
          </Link>
          <div className="space-x-4">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
            <Link href="/projects" className="hover:text-gray-300">
              Projects
            </Link>
          </div>
        </nav>
        {children}
        <footer>
          <p>&copy; 2025 My Portfolio</p>
        </footer>
      </body>
    </html>
  )
}