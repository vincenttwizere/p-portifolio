import React from 'react';
import { motion } from 'framer-motion';

const OrbitingTech = () => {
  const technologies = [
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
      name: 'JavaScript', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
      color: '#F7DF1E'
    },
    { 
      name: 'React', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
      color: '#61DAFB'
    },
    { 
      name: 'Node.js', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
      color: '#339933'
    },
    { 
      name: 'Next.js', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
      color: '#000000'
    },
    { 
      name: 'Python', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
      color: '#3776AB'
    },
    { 
      name: 'Tailwind', 
      icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
      color: '#38B2AC'
    },
    { 
      name: 'MongoDB', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
      color: '#47A248'
    }
  ];

  return (
    <div className="absolute inset-0">
      {/* Orbit Ring */}
      <div 
        className="absolute inset-0 border-2 border-gray-200 dark:border-gray-700 rounded-full opacity-30"
        style={{
          width: '280px',
          height: '280px',
          left: 'calc(50% - 140px)',
          top: 'calc(50% - 140px)',
        }}
      />
      
      {/* Orbiting Icons */}
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
        {technologies.map((tech, index) => {
          const angle = (index * 360) / technologies.length;
          return (
            <div
              key={tech.name}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: `rotate(${angle}deg) translateX(140px) rotate(-${angle}deg)`,
              }}
            >
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
                style={{ 
                  backgroundColor: 'white',
                  border: `2px solid ${tech.color}`,
                }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-5 h-5"
                />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default OrbitingTech; 