import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import OrbitingSkills from './OrbitingSkills';

const Skills = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="skills" className="min-h-[calc(100vh-6rem)] md:min-h-screen bg-gray-50 dark:bg-gray-900/50 py-8 md:py-12 lg:py-16 scroll-mt-16 md:scroll-mt-20 flex items-center justify-center">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-4 md:mb-8 lg:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-2 md:mb-3"
          >
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400 tracking-widest uppercase">
              My Expertise
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-2 md:mb-3"
          >
            Skills & Technologies
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed px-4"
          >
            Here are the technologies and tools I work with to bring ideas to life
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center items-center mt-4 md:mt-8 lg:mt-12"
        >
          <OrbitingSkills />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 