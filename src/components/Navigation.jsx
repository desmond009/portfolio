import { useEffect, useRef, useState } from 'react';
import { animate, createTimeline, utils } from 'animejs';
import { FaBars, FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa';
import { navLinks, profile } from '../data/portfolio';

const { stagger } = utils;

const Navigation = () => {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return undefined;

    const logo = nav.querySelector('.nav-logo-mark');
    const navItems = nav.querySelectorAll('.nav-link-item');
    const socials = nav.querySelectorAll('.nav-social-link');

    const timeline = createTimeline({ defaults: { ease: 'outExpo' } });
    timeline
      .add(logo, {
        opacity: [0, 1],
        translateY: [-18, 0],
        rotate: [-8, 0],
        duration: 720,
      })
      .add(
        navItems,
        {
          opacity: [0, 1],
          translateY: [-12, 0],
          duration: 560,
          delay: stagger(55),
        },
        '-=500',
      )
      .add(
        socials,
        {
          opacity: [0, 1],
          translateX: [12, 0],
          duration: 480,
          delay: stagger(70),
        },
        '-=420',
      );

    return () => timeline.revert();
  }, []);

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

  useEffect(() => {
    if (!isOpen) return undefined;

    const menu = navRef.current?.querySelector('.mobile-nav-panel');
    const menuItems = menu?.querySelectorAll('a');
    if (!menu || !menuItems?.length) return undefined;

    const timeline = createTimeline({ defaults: { ease: 'outExpo' } });
    timeline
      .add(menu, {
        opacity: [0, 1],
        translateY: [-12, 0],
        scale: [0.98, 1],
        duration: 320,
      })
      .add(
        menuItems,
        {
          opacity: [0, 1],
          translateX: [-16, 0],
          duration: 360,
          delay: stagger(45),
        },
        '-=190',
      );

    return () => timeline.revert();
  }, [isOpen]);

  useEffect(() => {
    const activeLink = navRef.current?.querySelector('.nav-link-active');
    if (!activeLink) return undefined;

    const animation = animate(activeLink, {
      scale: [0.94, 1],
      duration: 360,
      ease: 'outBack',
    });

    return () => animation.revert();
  }, [activeSection]);

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
      ref={navRef}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'border-b border-cyan-300/10 bg-[#061014]/78 shadow-2xl shadow-cyan-950/20 backdrop-blur-2xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="group flex items-center gap-3">
            <span className="nav-logo-mark grid h-11 w-11 place-items-center rounded-2xl border border-cyan-300/25 bg-white/[0.04] font-mono text-lg font-bold text-neon opacity-0 shadow-glass transition group-hover:border-neon/70 group-hover:shadow-neon">
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
                className={`nav-link-item rounded-full px-4 py-2 text-sm font-medium opacity-0 transition ${
                  activeSection === link.href.slice(1)
                    ? 'nav-link-active bg-[#ff3d1d]/12 text-[#ff4a2b] shadow-[inset_0_0_18px_rgba(255,61,29,0.1)]'
                    : 'text-[#c9c1ae] hover:text-[#f4ecd7]'
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
              className="nav-social-link hidden text-[#c9c1ae] opacity-0 transition hover:text-[#ff4a2b] sm:block"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social-link hidden text-[#c9c1ae] opacity-0 transition hover:text-[#ff4a2b] sm:block"
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
        <div className="mobile-nav-panel mx-4 mb-4 rounded-3xl border border-white/10 bg-[#071217]/95 p-3 opacity-0 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl lg:hidden">
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
