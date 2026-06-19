import { useEffect, useRef } from 'react';
import { createTimeline, utils } from 'animejs';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';
import { profile } from '../data/portfolio';

const { stagger } = utils;

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const root = heroRef.current;
    if (!root) return undefined;

    const titleLines = root.querySelectorAll('.editorial-title-line');
    const revealItems = root.querySelectorAll('.hero-reveal');
    const redPanel = root.querySelector('.editorial-red-panel');

    // Editorial intro keeps motion focused on first paint instead of running constant background loops.
    const timeline = createTimeline({ defaults: { ease: 'outExpo' } });
    timeline
      .add(redPanel, {
        opacity: [0, 1],
        translateX: [48, 0],
        rotate: [2, 0],
        duration: 760,
      })
      .add(
        titleLines,
        {
          opacity: [0, 1],
          translateY: [42, 0],
          skewX: [-5, 0],
          duration: 760,
          delay: stagger(80),
        },
        '-=520',
      )
      .add(
        revealItems,
        {
          opacity: [0, 1],
          translateY: [28, 0],
          duration: 720,
          delay: stagger(85),
        },
        '-=460',
      );

    return () => {
      timeline.revert();
    };
  }, []);

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" ref={heroRef} className="editorial-hero relative min-h-screen overflow-hidden pt-24">
      <div className="hero-kinetic-layer" aria-hidden="true">
        <span className="hero-kinetic-line hero-kinetic-line-one" />
        <span className="hero-kinetic-line hero-kinetic-line-two" />
        <span className="hero-kinetic-line hero-kinetic-line-three" />
      </div>
      <div className="editorial-red-panel" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col justify-center px-4 pb-12 sm:px-6 lg:px-8">
        <div className="hero-reveal editorial-label opacity-0">
          <span />
          Portfolio - 2026
        </div>

        <h1 className="editorial-title mt-8">
          <span className="editorial-title-line block opacity-0">VIJENDER</span>
          <span className="editorial-title-line block opacity-0">YADAV</span>
        </h1>

        <div className="hero-reveal mt-7 opacity-0">
          <p className="editorial-role">
            <span>&gt;</span> Full-Stack Developer
          </p>
          <p className="mt-5 max-w-3xl font-mono text-base leading-8 text-[#a09a8d] sm:text-lg">
            {profile.role}. B.Tech engineering student building MERN products, Web3 interfaces, and recruiter-ready
            applications with strong visual polish.
          </p>
          <p className="mt-2 font-mono text-sm uppercase tracking-[0.18em] text-[#7b7468]">
            <span className="text-[#c7a35c]">05+</span> projects / React / Node.js / Solana
          </p>
        </div>

        <div className="hero-reveal hero-ticker opacity-0" aria-hidden="true">
          <span className="hero-ticker-item">MERN</span>
          <span className="hero-ticker-item">Web3</span>
          <span className="hero-ticker-item">React</span>
          <span className="hero-ticker-item">Node</span>
        </div>

        <div className="hero-reveal mt-10 flex flex-col gap-4 opacity-0 sm:flex-row">
          <button type="button" onClick={() => scrollTo('#projects')} className="magnetic-btn editorial-btn editorial-btn-light">
            View Work
            <FaArrowRight />
          </button>
          <button type="button" onClick={() => scrollTo('#contact')} className="magnetic-btn editorial-btn editorial-btn-dark">
            Contact
          </button>
        </div>

        <div className="hero-reveal mt-14 hidden border-t border-[#f4ecd7]/10 pt-6 font-mono text-xs uppercase tracking-[0.32em] text-[#6d675b] opacity-0 md:flex">
          <span>Find me:</span>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="ml-8 hover:text-[#f4ecd7]">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="ml-8 hover:text-[#f4ecd7]">LinkedIn</a>
          <span className="mx-auto">Scroll</span>
        </div>
      </div>

      <button type="button" onClick={() => scrollTo('#about')} className="editorial-scroll" aria-label="Scroll to about">
        <FaArrowDown />
      </button>
    </section>
  );
};

export default Hero;
