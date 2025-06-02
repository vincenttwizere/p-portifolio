import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { GithubIcon, ExternalLinkIcon } from '../../assets/icons';
import { useState } from 'react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
    image: '/images/ecommerce.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://ecommerce-demo.com',
    features: [
      'User authentication & authorization',
      'Product catalog with search & filters',
      'Shopping cart & checkout process',
      'Payment integration'
    ]
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    image: '/images/taskmanager.jpg',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/taskmanager',
    demo: 'https://taskmanager-demo.com',
    features: [
      'Real-time collaboration',
      'Task tracking & organization',
      'Team management',
      'Progress analytics'
    ]
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website showcasing projects and skills with smooth animations.',
    image: '/images/portfolio.jpg',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://portfolio-demo.com',
    features: [
      'Responsive design',
      'Dark/Light mode',
      'Interactive animations',
      'Performance optimized'
    ]
  },
  {
    title: 'AI Chat Assistant',
    description: 'An intelligent chatbot powered by machine learning that provides customer support and information.',
    image: '/images/chatbot.jpg',
    tags: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    github: 'https://github.com/yourusername/ai-chat',
    demo: 'https://ai-chat-demo.com',
    features: [
      'Natural language processing',
      'Context-aware responses',
      'Multi-language support',
      'Integration with knowledge base'
    ]
  },
  {
    title: 'Social Media Dashboard',
    description: 'A comprehensive analytics dashboard for social media management and performance tracking.',
    image: '/images/dashboard.jpg',
    tags: ['Vue.js', 'D3.js', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/yourusername/social-dashboard',
    demo: 'https://social-dashboard-demo.com',
    features: [
      'Real-time analytics',
      'Custom data visualization',
      'Multi-platform integration',
      'Automated reporting'
    ]
  },
  {
    title: 'Weather Forecast App',
    description: 'A beautiful weather application with detailed forecasts, maps, and severe weather alerts.',
    image: '/images/weather.jpg',
    tags: ['React Native', 'Redux', 'Weather API'],
    github: 'https://github.com/yourusername/weather-app',
    demo: 'https://weather-app-demo.com',
    features: [
      'Location-based forecasts',
      'Interactive weather maps',
      'Severe weather alerts',
      'Hourly and daily predictions'
    ]
  },
  {
    title: 'Music Streaming App',
    description: 'A modern music streaming platform with personalized playlists and social features.',
    image: '/images/music.jpg',
    tags: ['Next.js', 'WebAudio API', 'Supabase', 'Stripe'],
    github: 'https://github.com/yourusername/music-stream',
    demo: 'https://music-stream-demo.com',
    features: [
      'Real-time audio streaming',
      'Playlist management',
      'Social sharing features',
      'Premium subscription system'
    ]
  },
  {
    title: 'Fitness Tracker',
    description: 'A comprehensive fitness tracking application with workout plans and progress monitoring.',
    image: '/images/fitness.jpg',
    tags: ['Flutter', 'Firebase', 'Google Fit API'],
    github: 'https://github.com/yourusername/fitness-tracker',
    demo: 'https://fitness-tracker-demo.com',
    features: [
      'Custom workout plans',
      'Progress visualization',
      'Health metrics tracking',
      'Community challenges'
    ]
  },
  {
    title: 'Recipe Sharing Platform',
    description: 'A community-driven recipe sharing platform with meal planning and nutritional information.',
    image: '/images/recipe.jpg',
    tags: ['Angular', 'NestJS', 'PostgreSQL'],
    github: 'https://github.com/yourusername/recipe-share',
    demo: 'https://recipe-share-demo.com',
    features: [
      'Recipe management',
      'Meal planning calendar',
      'Nutritional analysis',
      'Shopping list generation'
    ]
  }
];

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { isDarkMode } = useTheme();

  return (
    <motion.div
      className="relative w-full max-w-[280px] h-[280px] cursor-pointer perspective"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div
        className={`w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of Card */}
        <div 
          className={`absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-lg ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <div className="relative h-full">
            <div className="absolute inset-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            
            <div className="absolute bottom-0 w-full p-3">
              <h3 className="text-lg font-bold mb-1 text-white">{project.title}</h3>
              <p className="text-xs text-gray-200 mb-2 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded-full bg-white/20 backdrop-blur-sm text-white"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-white/20 backdrop-blur-sm text-white">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div 
          className={`absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-lg rotate-y-180 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <div className="p-4 h-full flex flex-col">
            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
            
            <div className="flex-grow space-y-3">
              <ul className="space-y-1.5">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-xs text-gray-600 dark:text-gray-400">
                    <span className="mr-1.5">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center gap-3 mt-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-gray-900 dark:text-white text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <GithubIcon className="w-4 h-4" />
                <span>Code</span>
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLinkIcon className="w-4 h-4" />
                <span>Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            My Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Featured Projects
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center"
              >
                {projects
                  .slice(
                    currentPage * projectsPerPage,
                    (currentPage + 1) * projectsPerPage
                  )
                  .map((project, index) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center mt-12 gap-8">
            <motion.button
              onClick={prevPage}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous projects"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-gray-700 dark:text-gray-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              onClick={nextPage}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next projects"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-gray-700 dark:text-gray-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 