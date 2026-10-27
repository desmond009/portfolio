import { useEffect, useRef } from 'react';
import { animate, utils } from 'animejs';
import { skills } from '../data/portfolio';
import { useAnimeScrollReveal } from '../hooks/useAnimeScrollReveal';
import SectionHeading from './SectionHeading';

const { stagger } = utils;

const blurbs = [
  'Interface systems and product-grade implementation.',
  'Backend logic, data flows, and integration work.',
  'Web3, tooling, and deployment-ready workflows.',
];

const Skills = () => {
  const ref = useAnimeScrollReveal('.skill-reveal', { stagger: 60, distance: 30 });
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return undefined;

    const bars = grid.querySelectorAll('.skill-meter-fill');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    bars.forEach((bar) => {
      bar.style.transform = 'scaleX(0)';
    });

    // Meters fill in sequence once the grid scrolls into view.
    let animation;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        animation = animate(bars, {
          scaleX: [0, 1],
          duration: 900,
          delay: stagger(70, { start: 300 }),
          ease: 'outExpo',
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(grid);
    return () => {
      observer.disconnect();
      animation?.revert();
    };
  }, []);

  return (
    <section id="skills" ref={ref} className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="What's in my toolkit" className="skill-reveal">
          Frontend polish, backend structure, database design, cloud services, and wallet-connected blockchain flows.
        </SectionHeading>

        <div ref={gridRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={skill.name} className="skill-reveal brut-box brut-hover p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="icon-shell">
                    <Icon />
                  </div>
                  <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="card-title mt-5">{skill.name}</h3>
                <p className="card-copy mt-2 min-h-12">{blurbs[index % blurbs.length]}</p>
                <div className="skill-meter mt-5">
                  <div className="skill-meter-fill" />
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
