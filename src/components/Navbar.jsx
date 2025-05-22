import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
// Import CV directly
import CV from '../assets/Vincent TWIZERE Curricuum vitae.pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { 
      name: 'Download CV', 
      href: CV,  // Use the imported CV directly
      isButton: true,
      download: true,
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <motion.a
            href="#home"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={profileImg}
              alt="Vincent"
              className="w-8 h-8 rounded-full object-cover border-2 border-primary"
            />
            <span className="text-lg font-medium text-gray-900 dark:text-white tracking-wide">
              Vincent
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                download={link.download}
                target={link.target}
                rel={link.rel}
                className={`text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors tracking-wide uppercase ${
                  link.isButton ? 'px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark' : ''
                }`}
                whileHover={{ y: link.isButton ? 0 : -2 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5 text-yellow-500" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-700" />
              )}
            </motion.button>
          </div>

          {/* Mobile Navigation Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className={`block w-full h-0.5 bg-gray-700 dark:bg-gray-300 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-gray-700 dark:bg-gray-300 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-gray-700 dark:bg-gray-300 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                download={link.download}
                target={link.target}
                rel={link.rel}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 tracking-wide uppercase ${
                  link.isButton ? 'bg-primary text-white hover:bg-primary-dark' : ''
                }`}
                whileHover={{ x: 10 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button
              onClick={() => {
                toggleTheme();
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 tracking-wide uppercase"
              whileHover={{ x: 10 }}
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 