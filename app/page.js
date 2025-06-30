'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { MainNav } from '../components/main-nav';
import { SiteFooter } from '../components/site-footer';
import { siteConfig } from '../config/site';
import { cn } from '../lib/utils';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
          
          <div className="container relative py-24 md:py-32 lg:py-40">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="space-y-4">
                <motion.h1 
                  className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Alain Ndizeye
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="max-w-[600px] text-gray-600 dark:text-gray-300 md:text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  I'm a passionate web developer who loves creating amazing digital 
                  experiences. Welcome to my portfolio!
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Button asChild size="lg">
                    <Link href="/projects">
                      View My Work
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/about">
                      About Me
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div 
                  className="flex gap-4 pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={siteConfig.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Contact"
                  >
                    <Mail className="h-5 w-5" />
                  </Link>
                </motion.div>
              </div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="relative z-10 w-full h-full max-w-[500px] mx-auto">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                    <div className="h-full w-full rounded-[14px] bg-background p-4">
                      <div className="h-full w-full rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-400/20" />
                <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl dark:bg-purple-400/20" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <div className="container">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">My Skills</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I've worked with a variety of technologies in the web development world.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: 'JavaScript', icon: '💻' },
                { name: 'React', icon: '⚛️' },
                { name: 'Next.js', icon: '🌐' },
                { name: 'Node.js', icon: '🟢' },
                { name: 'TypeScript', icon: '📝' },
                { name: 'Tailwind CSS', icon: '🎨' },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center p-6 bg-card rounded-xl border hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className="text-4xl mb-3">{skill.icon}</span>
                  <h3 className="font-medium">{skill.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Here are some of my recent projects. Check them out!
              </p>
            </motion.div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'E-commerce Platform',
                  description: 'A full-featured e-commerce platform with cart, checkout, and payment integration.',
                  tags: ['Next.js', 'Stripe', 'MongoDB'],
                  image: '/project1.jpg',
                  link: '/projects/ecommerce-platform'
                },
                {
                  title: 'Task Management App',
                  description: 'A collaborative task management application with real-time updates.',
                  tags: ['React', 'Node.js', 'WebSockets'],
                  image: '/project2.jpg',
                  link: '/projects/task-management'
                },
                {
                  title: 'Portfolio Website',
                  description: 'A modern portfolio website built with Next.js and Tailwind CSS.',
                  tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
                  image: '/project3.jpg',
                  link: '/projects/portfolio'
                }
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  className="group relative overflow-hidden rounded-xl border bg-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="aspect-video bg-muted relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <Button size="sm" asChild>
                        <Link href={project.link}>
                          View Project
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="text-xs px-2 py-1 bg-muted rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container max-w-4xl text-center">
            <motion.div 
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-white/10" />
              <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-white/10" />
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4">Let's Work Together</h2>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                  Have a project in mind or want to collaborate? Feel free to reach out!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90" asChild>
                    <Link href="/contact">
                      Get In Touch
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
                    <Link href="/about">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}