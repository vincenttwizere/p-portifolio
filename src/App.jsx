import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/hero/Hero';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-16">
          <Hero />
          {/* Other sections will be added here */}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
