import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [hoveredMethod, setHoveredMethod] = useState(null);

  const contactMethods = [
    {
      id: 'email',
      title: 'Email',
      value: 'v.twizere12@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      action: 'mailto:v.twizere12@gmail.com',
      color: '#FF6B6B'
    },
    {
      id: 'github',
      title: 'GitHub',
      value: 'vincenttwizere',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
      action: 'https://github.com/vincenttwizere',
      color: '#6E5494'
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      value: 'Vincent Twizere',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      action: 'https://www.linkedin.com/in/vincent-twizere-35595326a',
      color: '#0077B5'
    },
    {
      id: 'phone',
      title: 'Phone',
      value: '+250 786 618 907',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      action: 'tel:+250786618907',
      color: '#38B2AC'
    }
  ];

  const handleMethodClick = (action) => {
    window.open(action, '_blank');
  };

  return (
    <section id="contact" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl font-bold mt-2">
            Let's Connect
          </h2>
        </motion.div>

        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`rounded-xl overflow-hidden shadow-lg ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {contactMethods.map((method) => (
                <motion.div
                  key={method.id}
                  className="relative cursor-pointer group"
                  onHoverStart={() => setHoveredMethod(method.id)}
                  onHoverEnd={() => setHoveredMethod(null)}
                  onClick={() => handleMethodClick(method.action)}
                  whileHover={{ x: 5 }}
                >
                  <div className="p-4 flex items-center gap-4 relative z-10">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                      style={{
                        backgroundColor: hoveredMethod === method.id ? method.color : isDarkMode ? '#374151' : '#F3F4F6',
                        color: hoveredMethod === method.id ? 'white' : method.color
                      }}
                    >
                      {method.icon}
            </div>

                    <div className="flex-grow">
                      <p className="text-sm font-medium">{method.title}</p>
                      <p className={`text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {method.value}
                      </p>
            </div>

                    <motion.svg
                      className={`w-5 h-5 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      initial={{ x: 0 }}
                      animate={{ x: hoveredMethod === method.id ? 5 : 0 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
              </div>

                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(to right, ${method.color}10, transparent)`
                    }}
                  />
                </motion.div>
              ))}
                </div>
          </motion.div>
                </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-center mt-6 text-sm ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          Click on any method to get in touch
        </motion.p>
      </div>
    </section>
  );
};

export default Contact; 