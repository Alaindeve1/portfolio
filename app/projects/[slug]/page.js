import Link from 'next/link'
import Image from 'next/image'
const { getProjectBySlug, getAllProjects } = require('../data')
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const projects = getAllProjects()
  
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }) {
  const project = await getProjectBySlug(params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found'
    }
  }
  
  return {
    title: `${project.title} - My Portfolio`,
    description: project.description,
  }
}

export default async function ProjectDetail({ params }) {
  const project = await getProjectBySlug(params.slug)
  
  if (!project) {
    notFound()
  }
  
  return (
    <main className="container mx-auto px-4 py-8">
      <Link 
        href="/projects" 
        className="text-blue-600 hover:text-blue-800 mb-6 inline-block"
      >
        ← Back to Projects
      </Link>
      
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-gray-600 mb-6">{project.description}</p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
            <p className="text-gray-700 mb-6">{project.longDescription}</p>
            
            <div className="flex gap-4 mb-6">
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
              >
                View Code
              </a>
              <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Live Demo
              </a>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span 
                  key={tech} 
                  className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Project image */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            width={800}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </main>
  )
}