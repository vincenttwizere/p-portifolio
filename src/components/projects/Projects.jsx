import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { GithubIcon, ExternalLinkIcon } from '../../assets/icons';
import { useState } from 'react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration. Built with modern best practices and scalable architecture.',
    image: '/images/ecommerce.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://ecommerce-demo.com',
    features: [
      'User authentication & authorization',
      'Product catalog with search & filters',
      'Shopping cart & checkout process',
      'Payment integration with Stripe'
    ]
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features. Designed for modern remote teams.',
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
    description: 'A modern portfolio website showcasing projects and skills with smooth animations and interactive elements.',
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
      className="relative w-full h-[400px] cursor-pointer perspective"
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
          className={`absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-2xl ${
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
                
            <div className="absolute bottom-0 w-full p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-200 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                      <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-white/20 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
              </div>
            </div>
            
            <div className="absolute top-4 right-4">
              <motion.button
                className="text-white bg-primary/80 backdrop-blur-sm p-2 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-sm">Click to flip</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div 
          className={`absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-2xl rotate-y-180 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <div className="p-6 h-full flex flex-col">
            <h3 className="text-2xl font-bold mb-4 text-primary">{project.title}</h3>
            
            <div className="flex-grow">
              <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
              <ul className="space-y-2 mb-6">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span className={`text-sm ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
                  </div>
                  
            <div className="flex gap-4 justify-center mt-auto">
              <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                  isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GithubIcon className="w-5 h-5" />
                      <span>GitHub</span>
              </motion.a>
              <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLinkIcon className="w-5 h-5" />
                <span>Live Demo</span>
              </motion.a>
            </div>
            
            <div className="absolute top-4 right-4">
              <motion.button
                className={`p-2 rounded-full ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`}
                onClick={() => setIsFlipped(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-sm">Flip back</span>
              </motion.button>
            </div>
                  </div>
                </div>
              </div>
            </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 