import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Project Not Found</h2>
      <p className="text-gray-600 mb-8">
        Sorry, the project you're looking for doesn't exist.
      </p>
      
      <div className="space-x-4">
        <Link 
          href="/projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block"
        >
          View All Projects
        </Link>
        <Link 
          href="/"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 inline-block"
        >
          Go Home
        </Link>
      </div>
    </main>
  )
}