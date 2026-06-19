import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useAnimeButtons } from './hooks/useAnimeButtons';
import './App.css';

function App() {
  useAnimeButtons();

  return (
    <div className="App min-h-screen overflow-x-hidden bg-void text-slate-100">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
