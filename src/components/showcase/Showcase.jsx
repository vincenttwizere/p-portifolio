import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A comprehensive e-commerce platform with user authentication, product management, and secure payment integration. Features include real-time inventory tracking, user reviews, and an admin dashboard.',
    image: '/images/ecommerce.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://ecommerce-demo.com',
    color: '#FF6B6B'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A real-time task management application designed for remote teams. Includes features like task assignment, progress tracking, team chat, and deadline notifications.',
    image: '/images/taskmanager.jpg',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
    github: 'https://github.com/yourusername/taskmanager',
    demo: 'https://taskmanager-demo.com',
    color: '#4ECDC4'
  },
  {
    id: 3,
    title: 'AI Image Generator',
    description: 'An AI-powered image generation platform that creates unique artwork based on text descriptions. Includes style customization and image editing features.',
    image: '/images/ai-generator.jpg',
    tags: ['Next.js', 'OpenAI API', 'TypeScript', 'AWS'],
    github: 'https://github.com/yourusername/ai-generator',
    demo: 'https://ai-generator-demo.com',
    color: '#6C5CE7'
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A modern portfolio website showcasing projects and skills with interactive animations and smooth transitions.',
    image: '/images/portfolio.jpg',
    tags: ['React', 'Framer Motion', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://portfolio-demo.com',
    color: '#45B8AC'
  },
  {
    id: 5,
    title: 'Chat Application',
    description: 'Real-time chat application with features like group messaging, file sharing, and end-to-end encryption.',
    image: '/images/chat-app.jpg',
    tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/chat-app',
    demo: 'https://chat-app-demo.com',
    color: '#FF8C42'
  }
];

const ProjectModal = ({ project, onClose }) => {
  const { isDarkMode } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-2xl rounded-xl overflow-hidden ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        } shadow-2xl`}
      >
        <div className="relative h-64">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-sm ${
                  isDarkMode 
                    ? 'bg-gray-700 text-gray-300' 
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 rounded-lg bg-primary text-white text-center hover:bg-primary-dark transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Live Demo
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 py-2 rounded-lg text-center ${
                isDarkMode 
                  ? 'bg-gray-700 text-white hover:bg-gray-600' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Code
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Showcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { isDarkMode } = useTheme();

  return (
    <section id="showcase" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-center min-h-[500px]">
          <div className="relative w-[450px] h-[450px] flex items-center justify-center">
            {/* Center Text (replacing profile image) */}
            <div className="w-48 h-48 flex items-center justify-center rounded-full shadow-lg border-4 border-primary relative z-10 bg-white dark:bg-gray-800">
              <h2 className="text-4xl font-bold text-center">
                Projects
              </h2>
            </div>

            {/* Orbiting Ring */}
            <div className="absolute inset-0">
              {/* Ring Border */}
              <div 
                className="absolute inset-0 border-2 border-gray-200 dark:border-gray-700 rounded-full opacity-30"
                style={{
                  width: '280px',
                  height: '280px',
                  left: 'calc(50% - 140px)',
                  top: 'calc(50% - 140px)',
                }}
              />
              
              {/* Orbiting Numbers */}
              <motion.div
                className="absolute"
                style={{
                  width: '280px',
                  height: '280px',
                  left: 'calc(50% - 140px)',
                  top: 'calc(50% - 140px)',
                }}
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {projects.map((project, index) => {
                  const angle = (index * 360) / projects.length;
                  return (
                    <div
                      key={project.id}
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: `rotate(${angle}deg) translateX(140px) rotate(-${angle}deg)`,
                      }}
                    >
                      <motion.button 
                        className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
                        style={{ 
                          backgroundColor: isDarkMode ? '#374151' : 'white',
                          border: `2px solid ${project.color}`,
                        }}
                        onClick={() => setSelectedProject(project)}
                        whileHover={{ scale: 1.2 }}
                      >
                        <span className="text-sm font-bold" style={{ color: project.color }}>
                          {project.id}
                        </span>
                      </motion.button>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Showcase; 