import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
// Import CV directly
import CV from '../assets/Vincent TWIZERE Curricuum vitae.pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { 
      name: 'Download CV', 
      href: CV,
      download: true,
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    { name: 'Contact', href: '#contact' },
  ];

  // Smooth scroll handler
  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = window.innerWidth >= 768 ? 80 : 64; // Smaller offset on mobile
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 transition-all duration-300 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          <motion.a
            href="#home"
            className="flex items-center gap-3 z-50"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <img
              src={profileImg}
              alt="Vincent"
              className="w-8 h-8 rounded-full object-cover border-2 border-primary"
            />
            <span className="text-lg font-medium tracking-wide text-gray-900 dark:text-white">
              Vincent
            </span>
          </motion.a>

          {/* Mobile Navigation Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg z-50 menu-button bg-gray-100 dark:bg-gray-800"
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className={`block w-full h-0.5 transition-all duration-300 bg-gray-700 dark:bg-gray-300 ${
                isOpen ? 'rotate-45 translate-y-2.5' : ''
              }`}></span>
              <span className={`block w-full h-0.5 transition-all duration-300 bg-gray-700 dark:bg-gray-300 ${
                isOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block w-full h-0.5 transition-all duration-300 bg-gray-700 dark:bg-gray-300 ${
                isOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`}></span>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                download={link.download}
                target={link.target}
                rel={link.rel}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm tracking-wide uppercase transition-colors text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light ${
                  activeSection === link.href.replace('#', '') && !link.download
                    ? 'text-primary dark:text-primary-light font-medium'
                    : ''
                }`}
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5 text-yellow-500" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm md:hidden"
                style={{ zIndex: 40 }}
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed top-0 right-0 w-72 h-full bg-white dark:bg-gray-900 shadow-xl md:hidden mobile-menu overflow-y-auto"
                style={{ zIndex: 45 }}
              >
                <div className="py-20 px-6 space-y-2">
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      download={link.download}
                      target={link.target}
                      rel={link.rel}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`block py-3 px-4 text-sm rounded-lg transition-colors ${
                        activeSection === link.href.replace('#', '') && !link.download
                          ? 'bg-primary/10 text-primary dark:text-primary-light font-medium'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
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
                    className="w-full flex items-center gap-3 py-3 px-4 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    {isDarkMode ? (
                      <>
                        <SunIcon className="h-5 w-5 text-yellow-500" />
                        <span>Light Mode</span>
                      </>
                    ) : (
                      <>
                        <MoonIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                        <span>Dark Mode</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 