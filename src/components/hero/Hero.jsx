import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-50">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ParticleBackground />
        </Canvas>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4"
            >
              <span className="text-primary font-medium">Welcome to my portfolio</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Hi, I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Your Name</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6"
            >
              Full Stack Developer
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg"
            >
              I build beautiful and functional web applications with modern technologies.
              Passionate about creating exceptional user experiences.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                className="btn btn-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </motion.a>
              <motion.a
                href="#contact"
                className="btn btn-secondary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* 3D Model or Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:block"
          >
            <div className="relative w-full h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl shadow-xl transform -rotate-6">
                {/* Add your 3D model or image here */}
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-400">Your Image/3D Model</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero; 