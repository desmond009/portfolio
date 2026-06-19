import { experience } from '../data/portfolio';
import { useAnimeScrollReveal } from '../hooks/useAnimeScrollReveal';

const Experience = () => {
  const ref = useAnimeScrollReveal('.timeline-item', { stagger: 140 });

  return (
    <section id="experience" ref={ref} className="section-padding relative overflow-hidden bg-[#050b0e]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="section-kicker">Experience</p>
          <h2 className="section-title">Internship, education, and applied engineering growth.</h2>
        </div>

        <div className="relative grid gap-6 lg:grid-cols-2">
          {experience.map((item) => {
            const Icon = item.icon;
            return (
              <article key={`${item.title}-${item.company}`} className="timeline-item glass-card p-7">
                <div className="flex items-start gap-5">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-neon/20 bg-neon/10 text-neon shadow-neon">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-200/70">{item.period}</p>
                    <h3 className="mt-2 text-2xl font-bold text-white">{item.title}</h3>
                    <p className="mt-1 font-semibold text-neon">{item.company}</p>
                  </div>
                </div>
                <ul className="mt-7 space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-7 text-slate-300">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
