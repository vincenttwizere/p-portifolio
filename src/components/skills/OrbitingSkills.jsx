import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const OrbitingSkills = () => {
  const [dimensions, setDimensions] = useState({
    width: 400,
    height: 400,
    innerRadius: 70,
    middleRadius: 130,
    outerRadius: 190
  });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width < 640) { // sm
        setDimensions({
          width: 260,
          height: 260,
          innerRadius: 45,
          middleRadius: 85,
          outerRadius: 120
        });
      } else if (width < 768) { // md
        setDimensions({
          width: 300,
          height: 300,
          innerRadius: 55,
          middleRadius: 100,
          outerRadius: 140
        });
      } else {
        setDimensions({
          width: 400,
          height: 400,
          innerRadius: 70,
          middleRadius: 130,
          outerRadius: 190
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const technologies = {
    frontend: [
      { 
        name: 'React', 
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
        color: '#61DAFB'
      },
      { 
        name: 'JavaScript', 
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
        color: '#F7DF1E'
      },
      { 
        name: 'HTML', 
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
        color: '#E34F26'
      },
      { 
        name: 'CSS', 
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
        color: '#1572B6'
      },
      { 
        name: 'Tailwind', 
        icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
        color: '#38B2AC'
      }
    ],
    backend: [
      { 
        name: 'Node.js', 
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
        color: '#339933'
      },
      { 
        name: 'Express', 
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
        color: '#ffffff',
        darkColor: '#ffffff',
        customStyle: true
      },
      { 
        name: 'MongoDB', 
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
        color: '#47A248'
      },
      { 
        name: 'PostgreSQL', 
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
        color: '#336791'
      }
    ],
    tools: [
      { 
        name: 'Git', 
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
        color: '#F05032'
      },
      { 
        name: 'Docker', 
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
        color: '#2496ED'
      },
      { 
        name: 'AWS', 
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
        color: '#FF9900',
        customStyle: true,
        scale: 1.5
      },
      {
        name: 'GitLab',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/gitlab/gitlab-original.svg',
        color: '#FC6D26'
      },
      {
        name: 'Netlify',
        icon: 'https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg',
        color: '#00C7B7'
      }
    ]
  };

  const createOrbitingCircle = (items, radius, rotationDuration, startDelay, label) => (
    <div className="absolute inset-0">
      {/* Orbit Ring */}
      <div 
        className="absolute inset-0 border-2 border-gray-200 dark:border-gray-700 rounded-full opacity-30"
        style={{
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          left: `calc(50% - ${radius}px)`,
          top: `calc(50% - ${radius}px)`,
        }}
      />
      
      {/* Label */}
      <div
        className="absolute text-xs font-medium text-gray-700 dark:text-gray-300"
        style={{
          top: `calc(50% - ${radius + 20}px)`,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        {label}
      </div>
      
      {/* Orbiting Icons */}
      <motion.div
        className="absolute"
        style={{
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          left: `calc(50% - ${radius}px)`,
          top: `calc(50% - ${radius}px)`,
        }}
        animate={{
          rotate: 360
        }}
        transition={{
          duration: rotationDuration,
          repeat: Infinity,
          ease: "linear",
          delay: startDelay
        }}
      >
        {items.map((tech, index) => {
          const angle = (index * 360) / items.length;
          return (
            <motion.div
              key={tech.name}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
              }}
              whileHover={{ scale: 1.2 }}
            >
              <div 
                className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-lg -translate-x-1/2 -translate-y-1/2 ${
                  tech.customStyle 
                    ? 'bg-gray-800 dark:bg-white' 
                    : 'bg-white dark:bg-gray-800'
                } hover:scale-110 transition-transform overflow-hidden`}
                style={{ 
                  border: `2px solid ${tech.darkColor || tech.color}`,
                }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className={`w-4 h-4 sm:w-5 sm:h-5 ${tech.customStyle ? 'invert dark:invert-0' : ''}`}
                  style={tech.scale ? { transform: `scale(${tech.scale})` } : undefined}
                  title={tech.name}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );

  return (
    <div 
      className="relative mx-auto transition-all duration-300"
      style={{ 
        width: `${dimensions.width}px`, 
        height: `${dimensions.height}px` 
      }}
    >
      {/* Inner Circle - Frontend */}
      {createOrbitingCircle(technologies.frontend, dimensions.innerRadius, 20, 0, 'Frontend')}
      
      {/* Middle Circle - Backend */}
      {createOrbitingCircle(technologies.backend, dimensions.middleRadius, 25, 0.5, 'Backend')}
      
      {/* Outer Circle - Tools */}
      {createOrbitingCircle(technologies.tools, dimensions.outerRadius, 30, 1, 'Tools')}
    </div>
  );
};

export default OrbitingSkills; 