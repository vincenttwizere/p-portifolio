import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import profileImg from '../../assets/profile.jpg';
import { useState, useEffect } from 'react';
import OrbitingTech from '../about/OrbitingTech';

const Hero = () => {
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer"
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentRoleText, setCurrentRoleText] = useState('');

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      setCurrentRoleText(roles[currentRoleIndex].slice(0, current + 1));
      current++;
      if (current === roles[currentRoleIndex].length) {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 2000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [currentRoleIndex]);

  return (
    <div className="relative w-screen overflow-x-hidden">
      {/* Full-width background cover */}
      <div className="absolute top-0 inset-x-0 w-full h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        Commented out particle background
        <div className="absolute inset-0">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <ParticleBackground />
          </Canvas>
        </div>
       

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4 flex items-center justify-center min-h-screen">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full max-w-7xl">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center md:text-left space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-block w-full md:w-auto"
                >
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400 tracking-widest uppercase">
                    Welcome to my world
                  </span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight"
                >
                  <span className="text-gray-900 dark:text-white">Hi, I'm Vincent TWIZERE</span>
                </motion.h1>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-base md:text-lg text-gray-900 dark:text-white flex items-center gap-2 font-medium justify-center md:justify-start"
                >
                  <span className="text-blue-600 dark:text-blue-400">{currentRoleText}</span>
                  <span className="inline-block w-1 h-5 bg-blue-600 dark:bg-blue-400 animate-pulse" />
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-sm text-gray-600 dark:text-gray-400 max-w-lg font-light leading-relaxed mx-auto md:mx-0"
                >
                  I build beautiful and functional web applications with modern technologies.<br />
                  Passionate about creating exceptional user experiences.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="space-y-3"
                >
                  <span className="text-xs font-medium text-gray-900 dark:text-white tracking-widest uppercase block text-center md:text-left">Find me on</span>
                  <div className="flex gap-4 justify-center md:justify-start">
                    <motion.a
                      href="https://github.com/vincenttwizere"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/vincent-twizere-35595326a"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </motion.a>
                    <motion.a
                      href="https://www.instagram.com/olivin_250"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>

              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden md:block relative flex items-center justify-center min-h-[300px]"
              >
                <div className="relative w-[300px] h-[300px] flex items-center justify-center">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-primary relative z-10"
                  />
                  <OrbitingTech />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="text-[10px] uppercase tracking-widest mb-2">Scroll Down</span>
            <svg
              className="w-4 h-4 animate-bounce"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero; 