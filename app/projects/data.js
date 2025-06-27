// Projects data
const projects = [
  {
    id: 1,
    slug: 'ecommerce-website',
    title: 'E-commerce Website',
    description: 'A full-stack e-commerce site built with Next.js and Stripe',
    longDescription: 'This comprehensive e-commerce platform features user authentication, product catalog, shopping cart, secure payments via Stripe, order management, and admin dashboard. Built with modern technologies for optimal performance and user experience.',
    tech: ['Next.js', 'React', 'Stripe', 'MongoDB'],
    features: [
      'User authentication and profiles',
      'Product catalog with search and filters',
      'Shopping cart and wishlist',
      'Secure payment processing',
      'Order tracking and history',
      'Admin dashboard for inventory management'
    ],
    github: 'https://github.com/johndoe/ecommerce-site',
    demo: 'https://ecommerce-demo.vercel.app',
    image: '/project1.jpg'
  },
  {
    id: 2,
    slug: 'weather-app',
    title: 'Weather App',
    description: 'Real-time weather app using OpenWeather API',
    longDescription: 'A responsive weather application that provides real-time weather data, 5-day forecasts, and location-based services. Features clean UI design with weather animations and detailed meteorological information.',
    tech: ['React', 'JavaScript', 'CSS', 'API'],
    features: [
      'Current weather conditions',
      '5-day weather forecast',
      'Location-based weather detection',
      'Search for any city worldwide',
      'Weather animations and icons',
      'Responsive design for all devices'
    ],
    github: 'https://github.com/johndoe/weather-app',
    demo: 'https://weather-app-demo.vercel.app',
    image: '/project2.jpg'
  },
  {
    id: 3,
    slug: 'task-manager',
    title: 'Task Manager',
    description: 'Productivity app with drag-and-drop functionality',
    longDescription: 'A powerful task management application featuring drag-and-drop functionality, project organization, team collaboration, and progress tracking. Built for teams and individuals to boost productivity.',
    tech: ['React', 'Node.js', 'Express', 'MySQL'],
    features: [
      'Drag-and-drop task organization',
      'Project and category management',
      'Team collaboration and sharing',
      'Due dates and reminders',
      'Progress tracking and analytics',
      'Real-time updates and notifications'
    ],
    github: 'https://github.com/johndoe/task-manager',
    demo: 'https://task-manager-demo.vercel.app',
    image: '/project3.jpg'
  }
]

// Get project by slug
function getProjectBySlug(slug) {
  return projects.find(project => project.slug === slug);
}

// Get all projects
function getAllProjects() {
  return projects;
}

// Export functions
module.exports = {
  getProjectBySlug,
  getAllProjects,
  projects
};