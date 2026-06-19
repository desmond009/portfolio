import { useEffect, useRef, useState } from 'react';
import { animate, utils } from 'animejs';
import { experience } from '../data/portfolio';
import { useAnimeScrollReveal } from '../hooks/useAnimeScrollReveal';

const { stagger } = utils;

const meta = [
  ['Role', 'Intern'],
  ['Focus', 'Full-stack UI'],
  ['Mode', 'Production'],
  ['Impact', 'Feature delivery'],
];

const educationMeta = [
  ['Degree', 'B.Tech CSE'],
  ['Batch', '2023-2027'],
  ['Core', 'DSA / DBMS'],
  ['Track', 'Web3 + Cloud'],
];

const ExperienceCard = ({ item, index, isActive, onActivate }) => {
  const cardRef = useRef(null);
  const Icon = item.icon;
  const chips = index === 0 ? meta : educationMeta;

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return undefined;

    const floaters = card.querySelectorAll('.exp-floater, .exp-icon-shell, .exp-chip');
    const bullets = card.querySelectorAll('.exp-point');

    // Premium card ambience: independent floaters keep the card alive without disrupting readability.
    const ambient = animate(floaters, {
      translateY: (_, i) => [0, i % 2 === 0 ? -8 : 7, 0],
      rotate: (_, i) => [0, i % 2 === 0 ? 1.8 : -1.8, 0],
      duration: (_, i) => 3800 + i * 320,
      delay: stagger(120),
      loop: true,
      ease: 'inOutSine',
    });

    const handleMove = (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 6;
      const rotateX = (0.5 - y / rect.height) * 6;

      animate(card, {
        rotateX,
        rotateY,
        translateY: -8,
        duration: 260,
        ease: 'outQuad',
      });
      card.style.setProperty('--exp-x', `${x}px`);
      card.style.setProperty('--exp-y', `${y}px`);
    };

    const handleLeave = () => {
      animate(card, {
        rotateX: 0,
        rotateY: 0,
        translateY: 0,
        duration: 560,
        ease: 'outExpo',
      });
    };

    const handleEnter = () => {
      animate(bullets, {
        opacity: [0.58, 1],
        translateX: [12, 0],
        duration: 520,
        delay: stagger(70),
        ease: 'outExpo',
      });
    };

    card.addEventListener('pointermove', handleMove);
    card.addEventListener('pointerleave', handleLeave);
    card.addEventListener('pointerenter', handleEnter);

    return () => {
      ambient.revert();
      card.removeEventListener('pointermove', handleMove);
      card.removeEventListener('pointerleave', handleLeave);
      card.removeEventListener('pointerenter', handleEnter);
    };
  }, []);

  return (
    <article
      ref={cardRef}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      tabIndex={0}
      className={`timeline-item exp-card ${isActive ? 'exp-card-active' : ''}`}
    >
      <div className="exp-card-glow" />
      <span className="exp-floater exp-floater-one" />
      <span className="exp-floater exp-floater-two" />

      <div className="relative z-10 flex flex-col gap-8 xl:flex-row xl:items-start">
        <div className="flex items-start gap-5 xl:w-[42%]">
          <div className="exp-icon-shell">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.26em] text-cyan-200/70">{item.period}</p>
            <h3 className="mt-3 text-3xl font-black leading-tight text-white">{item.title}</h3>
            <p className="mt-2 text-lg font-bold text-neon">{item.company}</p>
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="grid gap-3 sm:grid-cols-4">
            {chips.map(([label, value]) => (
              <div key={`${label}-${value}`} className="exp-chip">
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>

          <ul className="mt-7 space-y-4">
            {item.points.map((point) => (
              <li key={point} className="exp-point">
                <span />
                <p>{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

const Experience = () => {
  const ref = useAnimeScrollReveal('.timeline-item', { stagger: 160, distance: 54 });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = ref.current;
    if (!section) return undefined;

    const titleWords = section.querySelectorAll('.exp-title-word');
    const spine = section.querySelector('.exp-spine-fill');

    // Section intro uses anime.js for a high-end staggered title and timeline energy line.
    const titleAnimation = animate(titleWords, {
      opacity: [0, 1],
      translateY: [42, 0],
      duration: 760,
      delay: stagger(95),
      ease: 'outExpo',
    });

    const spineAnimation = animate(spine, {
      scaleY: [0, 1],
      duration: 1300,
      ease: 'outExpo',
    });

    return () => {
      titleAnimation.revert();
      spineAnimation.revert();
    };
  }, [ref]);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll('.exp-card');
    if (!cards?.length) return undefined;

    const animation = animate(cards, {
      opacity: (_, index) => (index === activeIndex ? 1 : 0.72),
      scale: (_, index) => (index === activeIndex ? 1 : 0.975),
      duration: 460,
      ease: 'outExpo',
    });

    return () => animation.revert();
  }, [activeIndex, ref]);

  return (
    <section id="experience" ref={ref} className="experience-premium section-padding relative overflow-hidden">
      <div className="section-halo left-[-12%] top-20 bg-neon/10" />
      <div className="section-halo bottom-0 right-[-12%] bg-cyan-300/10" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="section-kicker">Experience</p>
            <h2 className="section-title overflow-hidden">
              <span className="exp-title-word inline-block opacity-0">Premium</span>{' '}
              <span className="exp-title-word inline-block opacity-0">experience</span>{' '}
              <span className="exp-title-word inline-block opacity-0">timeline.</span>
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            Internship execution, academic foundation, and product-minded engineering presented as a focused timeline
            for recruiters and collaborators.
          </p>
        </div>

        <div className="relative space-y-7">
          <div className="exp-spine">
            <span className="exp-spine-fill" />
          </div>

          {experience.map((item, index) => (
            <ExperienceCard
              key={`${item.title}-${item.company}`}
              item={item}
              index={index}
              isActive={activeIndex === index}
              onActivate={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
