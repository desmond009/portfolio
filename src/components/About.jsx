import { stats, processCards } from '../data/portfolio';
import { useAnimeScrollReveal } from '../hooks/useAnimeScrollReveal';

const About = () => {
  const ref = useAnimeScrollReveal('.reveal-item');

  return (
    <section id="about" ref={ref} className="section-padding relative overflow-hidden">
      <div className="section-halo left-[-10%] top-20 bg-cyan-400/10" />
      <div className="mx-auto max-w-7xl">
        <div className="reveal-item mb-12 max-w-3xl">
          <p className="section-kicker">About</p>
          <h2 className="section-title">Engineering student building premium, production-minded web experiences.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            I am a full-stack and Web3 developer focused on modern React interfaces, backend APIs, database-backed
            products, and blockchain workflows. My work combines clean engineering with strong visual execution so each
            project feels reliable, fast, and memorable.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="reveal-item glass-card p-6">
              <div className="text-4xl font-black text-gradient">{stat.value}</div>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {processCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="reveal-item glass-card p-6">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-neon/10 text-neon shadow-neon">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
