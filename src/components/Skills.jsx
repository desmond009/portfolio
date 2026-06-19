import { useEffect, useRef } from 'react';
import { animate, utils } from 'animejs';
import { skills } from '../data/portfolio';
import { useAnimeScrollReveal } from '../hooks/useAnimeScrollReveal';

const { stagger } = utils;

const accentStyles = {
  cyan: {
    icon: 'text-cyan-200 bg-cyan-300/12 border-cyan-200/25',
    glow: 'rgba(103, 232, 249, 0.34)',
    gradient: 'from-cyan-300 via-sky-400 to-blue-500',
  },
  green: {
    icon: 'text-neon bg-neon/12 border-neon/25',
    glow: 'rgba(57, 255, 136, 0.34)',
    gradient: 'from-neon via-emerald-300 to-cyan-300',
  },
  white: {
    icon: 'text-white bg-white/12 border-white/20',
    glow: 'rgba(255, 255, 255, 0.25)',
    gradient: 'from-white via-slate-300 to-cyan-200',
  },
  amber: {
    icon: 'text-amber-200 bg-amber-300/12 border-amber-200/25',
    glow: 'rgba(252, 211, 77, 0.3)',
    gradient: 'from-amber-300 via-yellow-300 to-orange-400',
  },
  pink: {
    icon: 'text-pink-200 bg-pink-300/12 border-pink-200/25',
    glow: 'rgba(249, 168, 212, 0.3)',
    gradient: 'from-pink-300 via-fuchsia-300 to-cyan-300',
  },
  violet: {
    icon: 'text-violet-200 bg-violet-300/12 border-violet-200/25',
    glow: 'rgba(196, 181, 253, 0.3)',
    gradient: 'from-violet-300 via-fuchsia-300 to-cyan-300',
  },
  orange: {
    icon: 'text-orange-200 bg-orange-300/12 border-orange-200/25',
    glow: 'rgba(253, 186, 116, 0.3)',
    gradient: 'from-orange-300 via-amber-300 to-neon',
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
    const floaters = board.querySelectorAll('.skill-floater');

    // Skill bars and floating accents animate once the board mounts for a polished dashboard feel.
    const barAnimation = animate(bars, {
      scaleX: [0, 1],
      duration: 920,
      delay: stagger(85),
      ease: 'outExpo',
    });

    const floaterAnimation = animate(floaters, {
      translateY: (_, index) => [0, index % 2 === 0 ? -16 : 13, 0],
      translateX: (_, index) => [0, index % 2 === 0 ? 10 : -10, 0],
      rotate: (_, index) => [0, index % 2 === 0 ? 5 : -5, 0],
      duration: (_, index) => 4300 + index * 420,
      delay: stagger(180),
      loop: true,
      ease: 'inOutSine',
    });

    const cleanups = Array.from(cards).map((card) => {
      const handleMove = (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 8;
        const rotateX = (0.5 - y / rect.height) * 8;

        animate(card, {
          rotateX,
          rotateY,
          translateY: -8,
          duration: 240,
          ease: 'outQuad',
        });
        card.style.setProperty('--skill-x', `${x}px`);
        card.style.setProperty('--skill-y', `${y}px`);
      };

      const handleLeave = () => {
        animate(card, {
          rotateX: 0,
          rotateY: 0,
          translateY: 0,
          duration: 540,
          ease: 'outExpo',
        });
      };

      card.addEventListener('pointermove', handleMove);
      card.addEventListener('pointerleave', handleLeave);
      return () => {
        card.removeEventListener('pointermove', handleMove);
        card.removeEventListener('pointerleave', handleLeave);
      };
    });

    return () => {
      barAnimation.revert();
      floaterAnimation.revert();
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
