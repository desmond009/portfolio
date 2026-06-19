import { useEffect, useRef } from 'react';
import { animate, utils } from 'animejs';
import { skills } from '../data/portfolio';
import { useAnimeScrollReveal } from '../hooks/useAnimeScrollReveal';

const { stagger } = utils;

const accentStyles = {
  cyan: {
    icon: 'text-[#b9d2cf] bg-[#86a9a6]/12 border-[#86a9a6]/25',
    glow: 'rgba(134, 169, 166, 0.26)',
    gradient: 'from-[#b9d2cf] via-[#86a9a6] to-[#405d5c]',
  },
  green: {
    icon: 'text-[#d9bd7a] bg-[#c7a35c]/12 border-[#c7a35c]/25',
    glow: 'rgba(199, 163, 92, 0.28)',
    gradient: 'from-[#d9bd7a] via-[#c7a35c] to-[#8f6f3c]',
  },
  white: {
    icon: 'text-[#f3eee2] bg-white/10 border-white/18',
    glow: 'rgba(243, 238, 226, 0.18)',
    gradient: 'from-[#f3eee2] via-[#c9c1ae] to-[#86a9a6]',
  },
  amber: {
    icon: 'text-[#d9bd7a] bg-[#c7a35c]/12 border-[#c7a35c]/25',
    glow: 'rgba(199, 163, 92, 0.24)',
    gradient: 'from-[#d9bd7a] via-[#c7a35c] to-[#9a7a45]',
  },
  pink: {
    icon: 'text-[#c9a7a2] bg-[#c9a7a2]/12 border-[#c9a7a2]/25',
    glow: 'rgba(201, 167, 162, 0.22)',
    gradient: 'from-[#c9a7a2] via-[#b68d86] to-[#86a9a6]',
  },
  violet: {
    icon: 'text-[#b8b2c8] bg-[#b8b2c8]/12 border-[#b8b2c8]/25',
    glow: 'rgba(184, 178, 200, 0.22)',
    gradient: 'from-[#b8b2c8] via-[#9b93ad] to-[#86a9a6]',
  },
  orange: {
    icon: 'text-[#d4b26f] bg-[#d4b26f]/12 border-[#d4b26f]/25',
    glow: 'rgba(212, 178, 111, 0.24)',
    gradient: 'from-[#d4b26f] via-[#c7a35c] to-[#86a9a6]',
  },
};

const Skills = () => {
  const ref = useAnimeScrollReveal('.skill-card', { stagger: 65, distance: 42 });
  const boardRef = useRef(null);

  useEffect(() => {
    const board = boardRef.current;
    if (!board) return undefined;

    const cards = board.querySelectorAll('.skill-card');
    const bars = board.querySelectorAll('.skill-progress-fill');

    // Skill bars and floating accents animate once the board mounts for a polished dashboard feel.
    const barAnimation = animate(bars, {
      scaleX: [0, 1],
      duration: 920,
      delay: stagger(85),
      ease: 'outExpo',
    });

    const cleanups = Array.from(cards).map((card) => {
      const handleEnter = () => {
        animate(card, {
          translateY: -6,
          scale: 1.015,
          duration: 220,
          ease: 'outQuad',
        });
      };

      const handleLeave = () => {
        animate(card, {
          translateY: 0,
          scale: 1,
          duration: 360,
          ease: 'outExpo',
        });
      };

      card.addEventListener('pointerenter', handleEnter);
      card.addEventListener('pointerleave', handleLeave);
      return () => {
        card.removeEventListener('pointerenter', handleEnter);
        card.removeEventListener('pointerleave', handleLeave);
      };
    });

    return () => {
      barAnimation.revert();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <section id="skills" ref={ref} className="skills-premium section-padding relative overflow-hidden">
      <div className="skills-color-wash skills-color-wash-one" />
      <div className="skills-color-wash skills-color-wash-two" />
      <div className="skills-color-wash skills-color-wash-three" />

      <div ref={boardRef} className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <p className="section-kicker">Skills</p>
            <h2 className="section-title">
              A premium stack board for full-stack, cloud, and Web3 shipping.
            </h2>
          </div>
          <div className="skill-hero-panel">
            <span className="skill-floater skill-floater-a">React</span>
            <span className="skill-floater skill-floater-b">Solana</span>
            <span className="skill-floater skill-floater-c">API</span>
            <p>
              Frontend polish, backend structure, database design, cloud services, and wallet-connected blockchain
              flows.
            </p>
          </div>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const accent = accentStyles[skill.accent];
            return (
              <div
                key={skill.name}
                className="skill-card"
                style={{
                  '--skill-glow': accent.glow,
                  '--skill-delay': `${index * 80}ms`,
                }}
              >
                <div className="skill-card-noise" />
                <div className="relative z-10">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className={`skill-icon-shell border ${accent.icon}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="skill-index">0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-black text-white">{skill.name}</h3>
                  <p className="mt-2 min-h-10 text-sm leading-6 text-slate-400">
                    {index % 3 === 0
                      ? 'Interface systems and product-grade implementation.'
                      : index % 3 === 1
                        ? 'Backend logic, data flows, and integration work.'
                        : 'Web3, tooling, and deployment-ready workflows.'}
                  </p>
                  <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className={`skill-progress-fill h-full origin-left rounded-full bg-gradient-to-r ${accent.gradient}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
