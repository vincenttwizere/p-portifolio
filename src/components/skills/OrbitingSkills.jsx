import React from 'react';
import { motion } from 'framer-motion';

const OrbitingSkills = () => {
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
        className="absolute text-sm font-medium text-gray-700 dark:text-gray-300"
        style={{
          top: `calc(50% - ${radius + 25}px)`,
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
                className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg -translate-x-1/2 -translate-y-1/2 ${
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
                  className={`w-6 h-6 ${tech.customStyle ? 'invert dark:invert-0' : ''}`}
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
    <div className="relative w-[500px] h-[500px] mx-auto">
      {/* Inner Circle - Frontend */}
      {createOrbitingCircle(technologies.frontend, 100, 20, 0, 'Frontend')}
      
      {/* Middle Circle - Backend */}
      {createOrbitingCircle(technologies.backend, 180, 25, 0.5, 'Backend')}
      
      {/* Outer Circle - Tools */}
      {createOrbitingCircle(technologies.tools, 260, 30, 1, 'Tools')}
    </div>
  );
};

export default OrbitingSkills; 