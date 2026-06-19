import { stats, processCards } from '../data/portfolio';
import { useAnimeScrollReveal } from '../hooks/useAnimeScrollReveal';

const About = () => {
  const ref = useAnimeScrollReveal('.reveal-item');

  return (
    <section id="about" ref={ref} className="about-editorial section-padding relative overflow-hidden">
      <div className="about-red-slab" aria-hidden="true" />
      <div className="about-paper-strip" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="reveal-item mb-12 max-w-4xl">
          <p className="about-kicker">About</p>
          <h2 className="about-title">Engineering student building premium, production-minded web experiences.</h2>
          <p className="about-copy mt-6 max-w-3xl">
            I am a full-stack and Web3 developer focused on modern React interfaces, backend APIs, database-backed
            products, and blockchain workflows. My work combines clean engineering with strong visual execution so each
            project feels reliable, fast, and memorable.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={stat.label} className="reveal-item about-stat-card">
              <span className="about-stat-index">0{index + 1}</span>
              <div className="about-stat-value">{stat.value}</div>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {processCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="reveal-item about-process-card">
                <div className="about-icon-shell">
                  <Icon className="h-5 w-5" />
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
