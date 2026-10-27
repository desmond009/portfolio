import { useEffect, useRef, useState } from 'react';
import { createTimeline, utils } from 'animejs';
import { FaBars, FaGithub, FaTimes } from 'react-icons/fa';
import { navLinks, profile } from '../data/portfolio';

const { stagger } = utils;

const Navigation = () => {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    // Items drop in like stamped labels, one after another.
    const timeline = createTimeline({ defaults: { ease: 'outExpo' } });
    timeline
      .add(nav.querySelector('.nav-logo'), {
        opacity: [0, 1],
        translateY: [-14, 0],
        duration: 600,
      })
      .add(
        nav.querySelectorAll('.nav-link-item'),
        {
          opacity: [0, 1],
          translateY: [-10, 0],
          duration: 480,
          delay: stagger(50),
        },
        '-=420',
      )
      .add(
        nav.querySelector('.nav-end'),
        {
          opacity: [0, 1],
          scale: [0.8, 1],
          duration: 420,
        },
        '-=360',
      );

    return () => timeline.revert();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const scrollPosition = window.scrollY + 120;

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

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const menu = navRef.current?.querySelector('.mobile-nav-panel');
    if (!menu || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const timeline = createTimeline({ defaults: { ease: 'outExpo' } });
    timeline
      .add(menu, {
        opacity: [0, 1],
        translateY: [-10, 0],
        duration: 280,
      })
      .add(
        menu.querySelectorAll('a'),
        {
          opacity: [0, 1],
          translateX: [-12, 0],
          duration: 320,
          delay: stagger(40),
        },
        '-=160',
      );

    return () => timeline.revert();
  }, [isOpen]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav ref={navRef} className={`site-nav fixed left-0 right-0 top-0 z-50 ${isScrolled ? 'site-nav-scrolled' : ''}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="nav-logo" aria-label="Vijender Yadav, home">
            VY
          </a>

          <div className="ml-auto hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`nav-link nav-link-item ${activeSection === link.href.slice(1) ? 'nav-link-active' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="nav-end flex items-center gap-3 lg:ml-6">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-sq h-11 w-11" aria-label="GitHub">
              <FaGithub />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              className="icon-sq h-11 w-11 lg:hidden"
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-nav-panel mx-4 mb-4 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={activeSection === link.href.slice(1) ? 'nav-link-active' : ''}
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
