import { useEffect, useRef, useState } from 'react';
import { createTimeline, utils } from 'animejs';
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../data/portfolio';

const { stagger } = utils;

const roles = profile.role.split('|').map((role) => role.trim());

// Types each role out, holds it, deletes it, then moves to the next one.
const useTypewriter = (lines) => {
  const [text, setText] = useState(lines[0]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    // Starts with the first role already on screen, then begins cycling.
    let lineIndex = 0;
    let charIndex = lines[0].length;
    let deleting = true;
    let timer;

    const tick = () => {
      const line = lines[lineIndex];
      charIndex += deleting ? -1 : 1;
      setText(line.slice(0, charIndex));

      let delay = deleting ? 35 : 75;
      if (!deleting && charIndex === line.length) {
        deleting = true;
        delay = 1800;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        lineIndex = (lineIndex + 1) % lines.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 2600);
    return () => clearTimeout(timer);
  }, [lines]);

  return text;
};

const Hero = () => {
  const heroRef = useRef(null);
  const typed = useTypewriter(roles);

  useEffect(() => {
    const root = heroRef.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    // The window "boots": frame pops in, its shadow drops, then the contents stamp in.
    const timeline = createTimeline({ defaults: { ease: 'outExpo' } });
    timeline
      .add(root.querySelector('.hero-window'), {
        opacity: [0, 1],
        translateY: [24, 0],
        scale: [0.97, 1],
        duration: 700,
      })
      .add(
        root.querySelectorAll('.win-dots span'),
        {
          scale: [0, 1],
          duration: 360,
          delay: stagger(70),
          ease: 'outBack',
        },
        '-=420',
      )
      .add(
        root.querySelectorAll('.hero-word'),
        {
          opacity: [0, 1],
          translateY: ['0.4em', 0],
          duration: 620,
          delay: stagger(90),
        },
        '-=260',
      )
      .add(
        root.querySelectorAll('.hero-reveal'),
        {
          opacity: [0, 1],
          translateY: [18, 0],
          duration: 560,
          delay: stagger(80),
        },
        '-=420',
      );

    return () => timeline.revert();
  }, []);

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" ref={heroRef} className="flex min-h-screen items-center px-4 pb-16 pt-32 sm:px-6 lg:px-8">
      <div className="hero-window brut-box brut-box-lg mx-auto w-full max-w-5xl">
        <div className="win-bar">
          <div className="win-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="win-title">Portfolio.exe</span>
          <span className="win-chip win-chip-live">Open to work</span>
        </div>

        <div className="p-6 sm:p-10">
          <span className="hero-reveal tag-label">Portfolio - 2026</span>

          <h1 className="hero-title mt-8">
            <span className="hero-word hero-title-underline">Vijender</span>{' '}
            <span className="hero-word inline-block">
              Yadav<span className="hero-title-dot">.</span>
            </span>
          </h1>

          <div className="hero-reveal terminal-box mt-8 px-4 py-4 sm:px-5">
            <p className="terminal-status">terminal_status: open</p>
            <p className="terminal-line" aria-label={roles.join(', ')}>
              <span aria-hidden="true">
                &gt; {typed}
                <span className="caret" />
              </span>
            </p>
          </div>

          <p className="hero-reveal mt-8 max-w-3xl text-base leading-8 text-muted sm:text-lg">
            {profile.role}. B.Tech engineering student building MERN products, Web3 interfaces, and recruiter-ready
            applications with strong visual polish.
          </p>

          <div className="hero-reveal mt-5 flex flex-wrap gap-2">
            {['05+ projects', 'MERN', 'Web3', 'React', 'Node.js', 'Solana'].map((item) => (
              <span key={item} className="tech-tag">
                {item}
              </span>
            ))}
          </div>

          <div className="hero-reveal mt-10 flex flex-col gap-4 sm:flex-row">
            <button type="button" onClick={() => scrollTo('#projects')} className="brut-btn">
              View Work
              <FaArrowRight />
            </button>
            <button type="button" onClick={() => scrollTo('#contact')} className="brut-btn brut-btn-ghost">
              <FaEnvelope />
              Contact
            </button>
          </div>

          <div className="hero-reveal mt-10 flex gap-4">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-sq" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon-sq" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={`mailto:${profile.email}`} className="icon-sq" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
