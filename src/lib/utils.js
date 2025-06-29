import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Format date to a readable format
export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Generate excerpt from content
export function getExcerpt(content, wordCount = 20) {
  return content.split(' ').slice(0, wordCount).join(' ') + '...';
}

// Filter projects by technology
export function filterProjects(projects, techFilter) {
  if (!techFilter) return projects;
  return projects.filter(project => 
    project.tech.some(tech => 
      tech.toLowerCase().includes(techFilter.toLowerCase())
    )
  );
}
