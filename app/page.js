import Link from 'next/link'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-6">
          Hi, I'm <span className="text-blue-600">Alain Ndizeye</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          I'm a passionate web developer who loves creating amazing digital 
          experiences. Welcome to my portfolio!
        </p>
        
        <div className="space-x-4">
          <Link 
            href="/projects" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block"
          >
            View My Work
          </Link>
          <Link 
            href="/about" 
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 inline-block"
          >
            Learn More
          </Link>
        </div>
      </section>
    </main>
  )
}