import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useState } from 'react';

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle sending the form data (e.g., via email or API)
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 scroll-mt-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-8"
        >
          Contact Me
        </motion.h2>
        <div className={`max-w-md mx-auto rounded-2xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row gap-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 flex-1"
          >
            <div>
              <h3 className="text-lg font-semibold mb-1">Email</h3>
              <a href="mailto:your.email@example.com" className="text-sm text-primary hover:underline">v.twizere12@gmail.com</a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Phone</h3>
              <a href="tel:+1234567890" className="text-sm text-primary hover:underline">+250786618907</a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Location</h3>
              <span className="text-sm text-gray-600 dark:text-gray-300">Kigali, Rwanda</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="flex-1"
          >
            {submitted ? (
              <div className="text-center text-green-500 text-lg font-semibold">
                Thank you for reaching out! I will get back to you soon.
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <label className="block mb-2 font-medium" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 font-medium" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 font-medium" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  Send Message
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 