import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollMotion } from './hooks/useScrollMotion';

function App() {
  useScrollMotion();

  return (
    <div className="min-h-screen overflow-x-hidden text-ink">
      <div className="scroll-progress-line" aria-hidden="true" />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
