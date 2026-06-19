import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useAnimeButtons } from './hooks/useAnimeButtons';
import { useScrollMotion } from './hooks/useScrollMotion';
import './App.css';

function App() {
  useAnimeButtons();
  useScrollMotion();

  return (
    <div className="App min-h-screen overflow-x-hidden bg-void text-slate-100">
      <div className="scroll-progress-line" aria-hidden="true" />
      <div className="scroll-side-meter" aria-hidden="true">
        <span />
      </div>
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
