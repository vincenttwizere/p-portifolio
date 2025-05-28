import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const OrbitingTech = () => {
  const [dimensions, setDimensions] = useState({
    width: 280,
    height: 280,
    radius: 140
  });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width < 640) { // sm
        setDimensions({
          width: 180,
          height: 180,
          radius: 90
        });
      } else if (width < 768) { // md
        setDimensions({
          width: 220,
          height: 220,
          radius: 110
        });
      } else {
        setDimensions({
          width: 280,
          height: 280,
          radius: 140
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

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
        className="absolute inset-0 border-2 border-gray-200 dark:border-gray-700 rounded-full opacity-30 transition-all duration-300"
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
          left: `calc(50% - ${dimensions.radius}px)`,
          top: `calc(50% - ${dimensions.radius}px)`,
        }}
      />
      
      {/* Orbiting Icons */}
      <motion.div
        className="absolute transition-all duration-300"
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
          left: `calc(50% - ${dimensions.radius}px)`,
          top: `calc(50% - ${dimensions.radius}px)`,
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
                transform: `rotate(${angle}deg) translateX(${dimensions.radius}px) rotate(-${angle}deg)`,
              }}
            >
              <div 
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-lg -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
                style={{ 
                  backgroundColor: 'white',
                  border: `2px solid ${tech.color}`,
                }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-4 h-4 sm:w-5 sm:h-5"
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