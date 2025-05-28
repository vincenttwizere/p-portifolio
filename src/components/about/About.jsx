import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import profileImg from '../../assets/profile.jpg';
import OrbitingTech from './OrbitingTech';

const About = () => {
  const { isDarkMode } = useTheme();

  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'MongoDB', level: 70 },
  ];

  return (
    <section id="about" className="section py-12 md:py-16 lg:py-20 scroll-mt-16 md:scroll-mt-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center"
        >
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[450px] order-2 md:order-1"
          >
            <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] flex items-center justify-center">
              <img
                src={profileImg}
                alt="Profile"
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-full shadow-lg border-4 border-primary relative z-10"
              />
              <OrbitingTech />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 space-y-3 md:space-y-4 lg:space-y-6"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">About Me</h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
              I'm a passionate Full Stack Developer with a strong focus on creating beautiful and functional web applications. 
              With expertise in modern web technologies, I strive to build applications that not only look great but also 
              provide exceptional user experiences.
            </p>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
              My journey in web development started with a curiosity about how things work on the internet. 
              Since then, I've been constantly learning and improving my skills to stay up-to-date with the 
              latest technologies and best practices.
            </p>

            {/* Skills Progress Bars */}
            <div className="space-y-2 md:space-y-3 pt-2 md:pt-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-sm md:text-base text-primary font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 md:h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="h-1.5 md:h-2 rounded-full bg-gradient-to-r from-primary to-secondary"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 