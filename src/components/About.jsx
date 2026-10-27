import { useEffect, useRef, useState } from 'react';
import { stats, processCards } from '../data/portfolio';
import { useAnimeScrollReveal } from '../hooks/useAnimeScrollReveal';
import SectionHeading from './SectionHeading';

// Counts small numbers up from zero once visible, keeping zero-padding and suffixes like "+".
const CountUp = ({ value }) => {
  const ref = useRef(null);
  const match = /^(\d+)(.*)$/.exec(value);
  const target = match ? Number(match[1]) : 0;
  const animatable = match && target < 1000;
  const [current, setCurrent] = useState(() =>
    animatable && !window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : target,
  );

  useEffect(() => {
    const node = ref.current;
    if (!animatable || !node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let frame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const step = (now) => {
        const t = Math.min((now - start) / 1100, 1);
        setCurrent(Math.round(target * (1 - (1 - t) ** 3)));
        if (t < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    });

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [animatable, target]);

  const display = animatable ? String(current).padStart(match[1].length, '0') + match[2] : value;
  return <span ref={ref}>{display}</span>;
};

const About = () => {
  const ref = useAnimeScrollReveal('.reveal-item', { stagger: 110 });

  return (
    <section id="about" ref={ref} className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="About Me" className="reveal-item" />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="reveal-item brut-box p-6 sm:p-10">
            <p className="font-mono text-xl font-bold leading-snug sm:text-2xl">
              Engineering student building premium, production-minded web experiences.
            </p>
            <p className="card-copy mt-6">
              I am a <span className="ink-link">full-stack and Web3 developer</span> focused on modern React
              interfaces, backend APIs, database-backed products, and{' '}
              <span className="ink-link">blockchain workflows</span>. My work combines clean engineering with strong
              visual execution so each project feels reliable, fast, and memorable.
            </p>

            <hr className="my-8 border-0 border-t-[3px] border-ink" />

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-box">
                  <div className="stat-value">
                    <CountUp value={stat.value} />
                  </div>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-item brut-box overflow-hidden">
            <div className="win-bar">
              <div className="win-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="win-title">How_I_work.log</span>
              <span className="win-chip">{processCards.length} items</span>
            </div>
            <div className="dot-panel grid gap-5 p-6 sm:p-8">
              {processCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="brut-box brut-hover flex gap-5 p-5">
                    <div className="icon-shell">
                      <Icon />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-3">
                        <span className="card-index">0{index + 1}</span>
                        <h3 className="card-title">{card.title}</h3>
                      </div>
                      <p className="card-copy mt-2">{card.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
