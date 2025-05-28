import { motion } from 'framer-motion';
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
  const [searchTerm, setSearchTerm] = useState('');
  const { isDarkMode } = useTheme();

  const filteredProjects = projects.filter(project => {
    const searchLower = searchTerm.toLowerCase();
    return (
      project.title.toLowerCase().includes(searchLower) ||
      project.description.toLowerCase().includes(searchLower) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
      project.features.some(feature => feature.toLowerCase().includes(searchLower))
    );
  });

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
          
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-md mx-auto mt-6"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects by name, technology, or feature..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                }`}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700`}
                >
                  <span className="sr-only">Clear search</span>
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mx-4 md:mx-8 lg:mx-16">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} />
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-8"
            >
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                No projects found matching your search criteria.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects; 