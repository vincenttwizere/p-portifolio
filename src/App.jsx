import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <main className="w-full">
            <Hero />
            {/* Commenting out About section
            <About />
            */}
            <Skills />
            <Projects />
            <Contact />
          </main>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
