export const metadata = {
    title: 'About - My Portfolio',
    description: 'Learn more about me and my skills',
  }
  
  export default function About() {
    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
            <p className="mb-4">
              I'm a passionate web developer with experience in modern technologies
              like React, Next.js, and Node.js.
            </p>
            <p>
              I love creating beautiful, functional websites that solve real problems
              and provide great user experiences.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <ul className="space-y-2">
              <li className="bg-blue-100 px-3 py-2 rounded">JavaScript</li>
              <li className="bg-blue-100 px-3 py-2 rounded">React</li>
              <li className="bg-blue-100 px-3 py-2 rounded">Next.js</li>
              <li className="bg-blue-100 px-3 py-2 rounded">CSS/Tailwind</li>
            </ul>
          </div>
        </div>
      </main>
    )
  }