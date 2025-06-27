import Link from 'next/link'
const { getAllProjects } = require('./data')

export const metadata = {
  title: 'Projects - My Portfolio',
  description: 'Check out my latest projects and work',
}

export default function Projects() {
  const projects = getAllProjects()
  
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-3">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span 
                  key={tech} 
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <Link 
              href={`/projects/${project.slug}`}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}