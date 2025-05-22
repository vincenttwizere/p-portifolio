import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const GlobalProjects = () => {
  console.log('GlobalProjects component rendering');
  const globeRef = useRef();
  const { isDarkMode } = useTheme();
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  // Project data with geographical locations
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution',
      lat: -1.9441,
      lng: 30.0619, // Kigali, Rwanda
      size: 20,
      color: '#FF5733',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: 'https://project1.com'
    },
    {
      id: 2,
      title: 'Healthcare App',
      description: 'Telemedicine platform',
      lat: 0.3476,
      lng: 32.5825, // Kampala, Uganda
      size: 18,
      color: '#33FF57',
      technologies: ['React Native', 'Firebase'],
      link: 'https://project2.com'
    },
    {
      id: 3,
      title: 'Education Platform',
      description: 'Online learning system',
      lat: -6.7924,
      lng: 39.2083, // Dar es Salaam, Tanzania
      size: 15,
      color: '#3357FF',
      technologies: ['Vue.js', 'Django', 'PostgreSQL'],
      link: 'https://project3.com'
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    console.log('Globe effect running');
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    
    // Initial globe animation
    if (globeRef.current) {
      console.log('Globe ref exists');
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.5;
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const markerSvg = `
    <svg viewBox="-4 0 36 36">
      <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"/>
      <circle fill="white" cx="14" cy="14" r="7"/>
    </svg>
  `;

  return (
    <section className="relative min-h-screen py-16 bg-white dark:bg-gray-900">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-b from-transparent to-white dark:to-gray-900 absolute bottom-0 z-10" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 relative z-20"
      >
        <span className="text-sm font-medium text-primary tracking-widest uppercase">
          Global Impact
        </span>
        <h2 className="text-3xl font-bold mt-2">
          Projects Around the World
        </h2>
      </motion.div>

      <div className="relative h-[600px] z-10">
        <Globe
          ref={globeRef}
          width={windowSize.width}
          height={600}
          globeImageUrl={`https://unpkg.com/three-globe/example/img/earth-${isDarkMode ? 'night' : 'blue-marble'}.jpg`}
          backgroundColor="rgba(0,0,0,0)"
          atmosphereColor={isDarkMode ? '#666666' : '#0077ff'}
          htmlElementsData={projects}
          htmlElement={d => {
            const el = document.createElement('div');
            el.innerHTML = `
              <div class="relative group">
                <div class="w-6 h-6 cursor-pointer transform transition-transform duration-300 hover:scale-150">
                  ${markerSvg}
                </div>
              </div>
            `;
            el.style.color = d.color;
            el.addEventListener('click', () => setSelectedProject(d));
            return el;
          }}
          htmlLat={d => d.lat}
          htmlLng={d => d.lng}
          htmlAltitude={0.1}
        />

        {/* Project Info Overlay */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`absolute top-4 right-4 p-6 rounded-xl shadow-xl max-w-sm ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-2">{selectedProject.title}</h3>
            <p className={`text-sm mb-3 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {selectedProject.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`px-2 py-1 text-xs rounded-full ${
                    isDarkMode 
                      ? 'bg-gray-700 text-gray-300'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary-dark transition-colors"
            >
              View Project
            </a>
          </motion.div>
        )}
      </div>

      {/* Instructions */}
      <div className="text-center mt-4">
        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Click on markers to view project details. Drag to rotate the globe.
        </p>
      </div>
    </section>
  );
};

export default GlobalProjects; 