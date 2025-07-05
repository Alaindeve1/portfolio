/**
 * Site-wide configuration
 * Update these values to personalize your portfolio
 */

export const siteConfig = {
  name: "Alain Ndizeye",
  title: "Web Developer | Full Stack Engineer",
  description: "I build exceptional digital experiences with modern web technologies. Specializing in React, Next.js, and Node.js.",
  url: "https://your-portfolio-url.com",
  author: "Alain Ndizeye",
  email: "your.email@example.com",
  links: {
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "mailto:your.email@example.com"
  },
  social: {
    github: "yourusername",
    twitter: "yourusername",
    linkedin: "in/yourusername"
  },
  // Update these with your actual skills
  skills: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "HTML5 & CSS3",
    "Tailwind CSS",
    "Git & GitHub",
    "Responsive Design",
    "RESTful APIs"
  ],
  // Add your experience
  experience: [
    {
      role: "Web Developer",
      company: "Your Company",
      period: "2022 - Present",
      description: "Building awesome web applications and solving complex problems."
    }
  ],
  // Add your education
  education: [
    {
      degree: "BSc in Computer Science",
      institution: "Your University",
      period: "2018 - 2022"
    }
  ]
};

// SEO Configuration
export const seoConfig = {
  title: "Alain Ndizeye | Web Developer",
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    site_name: siteConfig.name,
  },
  twitter: {
    handle: `@${siteConfig.social.twitter}`,
    site: `@${siteConfig.social.twitter}`,
    cardType: 'summary_large_image',
  },
};

export default siteConfig;
