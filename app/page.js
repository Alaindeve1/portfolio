'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Twitter, Code } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MainNav } from '@/components/main-nav';
import { SiteFooter } from '@/components/site-footer';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
          <div className="absolute inset-0 -z-10 h-full w-full bg-grid-pattern [mask-image:linear-gradient(to_bottom,transparent,white_90%,white)] dark:[mask-image:linear-gradient(to_bottom,transparent,#000_90%,#000)]" />
          
          <div className="section">
            <div className="container">
              <motion.div 
                className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.div 
                  className="space-y-6 md:space-y-8"
                  variants={fadeInUp}
                >
                  <div className="space-y-4">
                    <motion.h1 
                      className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      Hi, I'm{' '}
                      <span className="gradient-text">
                        Alain Ndizeye
                      </span>
                    </motion.h1>
                    
                    <motion.p 
                      className="text-lg md:text-xl text-muted-foreground max-w-2xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      I'm a passionate web developer who loves creating amazing digital 
                      experiences. Welcome to my portfolio!
                    </motion.p>
                  </div>
                  
                  <motion.div 
                    className="flex flex-wrap gap-4 pt-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Button asChild size="lg" className="btn-primary">
                      <Link href="/projects" className="group">
                        View My Work
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" className="btn-outline" asChild>
                      <Link href="/about" className="group">
                        About Me
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <span className="text-sm text-muted-foreground">Follow me:</span>
                    <div className="flex gap-4">
                      {[
                        { 
                          icon: Github, 
                          href: siteConfig.links.github,
                          label: 'GitHub'
                        },
                        { 
                          icon: Twitter, 
                          href: siteConfig.links.twitter,
                          label: 'Twitter'
                        },
                        { 
                          icon: Linkedin, 
                          href: siteConfig.links.linkedin,
                          label: 'LinkedIn'
                        },
                        { 
                          icon: Mail, 
                          href: '/contact',
                          label: 'Contact'
                        }
                      ].map(({ icon: Icon, href, label }, index) => (
                        <a
                          key={label}
                          href={href}
                          target={!href.startsWith('/') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors p-2 -m-2"
                          aria-label={label}
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="relative"
                  variants={fadeInUp}
                >
                  <div className="relative z-10 aspect-square w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-0.5 shadow-lg">
                    <div className="h-full w-full rounded-2xl bg-background p-6 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto">
                          <Code className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-semibold">Full-Stack Developer</h3>
                        <p className="text-muted-foreground">Creating beautiful, responsive web applications</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border border-muted bg-muted/50 -z-10" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="section bg-muted/20">
          <div className="container">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
              <p className="text-muted-foreground">
                I work with modern technologies to build fast, accessible, and beautiful web applications.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: 'React', icon: '⚛️' },
                { name: 'Next.js', icon: '⏭️' },
                { name: 'TypeScript', icon: '📘' },
                { name: 'Node.js', icon: '🟢' },
                { name: 'Tailwind CSS', icon: '🎨' },
                { name: 'GraphQL', icon: '📊' },
                { name: 'PostgreSQL', icon: '🐘' },
                { name: 'Docker', icon: '🐳' },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="card p-6 text-center hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="text-4xl mb-3">{skill.icon}</div>
                  <h3 className="font-medium">{skill.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container text-center">
            <motion.div 
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Something Amazing</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Have a project in mind? I'd love to hear about it.
              </p>
              <Button asChild size="lg" className="btn-primary">
                <Link href="/contact" className="group">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
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