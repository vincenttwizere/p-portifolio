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
      className="relative w-full h-[320px] cursor-pointer perspective"
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
            
            <div className="absolute bottom-0 w-full p-4">
              <h3 className="text-xl font-bold mb-1 text-white">{project.title}</h3>
              <p className="text-sm text-gray-200 mb-3 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded-full bg-white/20 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-white/20 backdrop-blur-sm">
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
            <h3 className="text-xl font-bold mb-3 text-primary">{project.title}</h3>
            
            <div className="flex-grow">
              <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
              <ul className="space-y-1 mb-4">
                {project.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-center gap-1.5">
                    <span className="text-primary text-xs">•</span>
                    <span className={`text-xs ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-2 justify-center">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm ${
                  isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </motion.a>
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary hover:bg-primary-dark text-white text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLinkIcon className="w-4 h-4" />
                <span>Demo</span>
              </motion.a>
            </div>
            
            <div className="absolute top-3 right-3">
              <motion.button
                className={`p-1.5 rounded-full text-xs ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`}
                onClick={() => setIsFlipped(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Back
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { isDarkMode } = useTheme();
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  return (
    <section id="projects" className="w-screen bg-gray-50 dark:bg-gray-900 py-12 md:py-16 lg:py-20 scroll-mt-16 md:scroll-mt-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10 lg:mb-12"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">
            My Work
          </span>
          <h2 className="text-3xl font-bold mt-2">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mx-4 md:mx-8 lg:mx-16">
          {currentProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-8 mt-8">
            <button
              onClick={prevPage}
              className={`text-3xl ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              aria-label="Previous projects"
            >
              &#8249;
            </button>
            <button
              onClick={nextPage}
              className={`text-3xl ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              aria-label="Next projects"
            >
              &#8250;
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects; 