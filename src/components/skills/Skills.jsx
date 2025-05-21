import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import OrbitingSkills from './OrbitingSkills';

const Skills = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="skills" className="section bg-gray-50 dark:bg-gray-900/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Here are the technologies and tools I work with
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          <OrbitingSkills />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 