import { useEffect, useState } from 'react';
import { FaBars, FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa';
import { navLinks, profile } from '../data/portfolio';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollPosition = window.scrollY + 100;

      for (const section of navLinks.map((link) => link.href.slice(1))) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'border-b border-cyan-300/10 bg-[#061014]/78 shadow-2xl shadow-cyan-950/20 backdrop-blur-2xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="group flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-300/25 bg-white/[0.04] font-mono text-lg font-bold text-neon shadow-glass transition group-hover:border-neon/70 group-hover:shadow-neon">
              VY
            </span>
            <span className="hidden text-sm font-semibold leading-tight text-white sm:block">
              Vijender
              <span className="block font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-200/60">Portfolio</span>
            </span>
          </a>

          <div className="hidden items-center rounded-full border border-white/10 bg-white/[0.035] px-2 py-2 backdrop-blur-xl lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeSection === link.href.slice(1)
                    ? 'bg-neon/10 text-neon shadow-[inset_0_0_18px_rgba(57,255,136,0.08)]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-slate-300 transition hover:text-neon sm:block"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-slate-300 transition hover:text-cyan-300 sm:block"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-white lg:hidden"
              aria-label="Toggle navigation"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="mx-4 mb-4 rounded-3xl border border-white/10 bg-[#071217]/95 p-3 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/[0.06] hover:text-neon"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
