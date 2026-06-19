import { useEffect, useRef } from 'react';
import { animate, createTimeline, utils } from 'animejs';
import { FaArrowDown, FaCode, FaPaperPlane } from 'react-icons/fa';
import { profile } from '../data/portfolio';

const { stagger } = utils;

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const root = heroRef.current;
    if (!root) return undefined;

    const headlineLetters = root.querySelectorAll('.headline-letter');
    const heroItems = root.querySelectorAll('.hero-reveal');
    const floaters = root.querySelectorAll('.floating-element');
    const orbs = root.querySelectorAll('.glow-orb');

    // Hero entrance timeline: letters, supporting copy, and CTAs arrive in a controlled sequence.
    const timeline = createTimeline({ defaults: { ease: 'outExpo' } });
    timeline
      .add(headlineLetters, {
        opacity: [0, 1],
        translateY: [48, 0],
        rotateX: [-70, 0],
        duration: 950,
        delay: stagger(24),
      })
      .add(
        heroItems,
        {
          opacity: [0, 1],
          translateY: [28, 0],
          duration: 850,
          delay: stagger(120),
        },
        '-=650',
      );

    // Ambient motion is intentionally slow so the premium background feels alive without distraction.
    const floatingAnimation = animate(floaters, {
      translateY: [0, -22, 0],
      rotate: [-4, 5, -4],
      duration: 5200,
      delay: stagger(260),
      loop: true,
      ease: 'inOutSine',
    });

    const orbAnimation = animate(orbs, {
      translateX: [0, 42, -18, 0],
      translateY: [0, -34, 24, 0],
      scale: [1, 1.14, 0.96, 1],
      duration: 9000,
      delay: stagger(700),
      loop: true,
      ease: 'inOutSine',
    });

    return () => {
      timeline.revert();
      floatingAnimation.revert();
      orbAnimation.revert();
    };
  }, []);

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const name = profile.name.split('');

  return (
    <section id="home" ref={heroRef} className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 animated-grid opacity-70" />
      <div className="glow-orb absolute left-[-10rem] top-28 h-80 w-80 rounded-full bg-neon/20 blur-3xl" />
      <div className="glow-orb absolute right-[-8rem] top-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="glow-orb absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />

      <div className="floating-element pointer-events-none absolute right-[9%] top-[23%] hidden h-24 w-24 rounded-[2rem] border border-cyan-200/20 bg-white/[0.04] shadow-glass backdrop-blur-xl lg:block" />
      <div className="floating-element pointer-events-none absolute left-[8%] top-[34%] hidden h-16 w-16 rotate-45 border border-neon/30 bg-neon/[0.06] shadow-neon lg:block" />
      <div className="floating-element pointer-events-none absolute bottom-[18%] right-[18%] hidden h-20 w-20 rounded-full border border-white/15 bg-cyan-300/[0.05] shadow-glass lg:block" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div>
          <p className="hero-reveal mb-5 inline-flex rounded-full border border-neon/25 bg-neon/[0.07] px-4 py-2 font-mono text-xs uppercase tracking-[0.28em] text-neon opacity-0">
            Engineer Student / Web3 Builder
          </p>

          <h1 className="max-w-5xl text-balance text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-8xl">
            <span className="block overflow-hidden pb-2">
              {name.map((letter, index) => (
                <span key={`${letter}-${index}`} className="headline-letter inline-block opacity-0">
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </span>
            <span className="hero-reveal mt-3 block bg-gradient-to-r from-neon via-cyan-200 to-sky-300 bg-clip-text text-3xl font-black leading-tight text-transparent opacity-0 sm:text-4xl lg:text-6xl">
              Full-Stack Developer
            </span>
          </h1>

          <p className="hero-reveal mt-6 max-w-2xl text-lg leading-8 text-slate-300 opacity-0 sm:text-xl">
            {profile.role}. I design and build polished web apps, wallet-connected products, and scalable interfaces
            that feel sharp enough for recruiters and useful enough for real users.
          </p>

          <div className="hero-reveal mt-9 flex flex-col gap-4 opacity-0 sm:flex-row">
            <button type="button" onClick={() => scrollTo('#projects')} className="magnetic-btn primary-btn">
              <FaCode />
              View Projects
            </button>
            <button type="button" onClick={() => scrollTo('#contact')} className="magnetic-btn secondary-btn">
              <FaPaperPlane />
              Contact Me
            </button>
          </div>
        </div>

        <div className="hero-reveal relative opacity-0">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-neon/20 via-cyan-400/10 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 shadow-glass backdrop-blur-2xl">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-300" />
              <span className="h-3 w-3 rounded-full bg-neon" />
            </div>
            <div className="rounded-3xl border border-cyan-200/10 bg-[#020609]/80 p-6 font-mono text-sm leading-7 text-slate-300">
              <p><span className="text-cyan-300">const</span> developer = {'{'}</p>
              <p className="pl-5">name: <span className="text-neon">'Vijender Yadav'</span>,</p>
              <p className="pl-5">focus: <span className="text-neon">'Full-Stack + Web3'</span>,</p>
              <p className="pl-5">stack: [<span className="text-cyan-200">'React'</span>, <span className="text-cyan-200">'Node'</span>, <span className="text-cyan-200">'Solana'</span>],</p>
              <p className="pl-5">status: <span className="text-neon">'open to internships'</span></p>
              <p>{'};'}</p>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollTo('#about')}
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.04] p-4 text-cyan-200 backdrop-blur-lg transition hover:text-neon md:block"
        aria-label="Scroll to about"
      >
        <FaArrowDown />
      </button>
    </section>
  );
};

export default Hero;
