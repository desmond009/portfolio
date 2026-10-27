import { experience } from '../data/portfolio';
import { useAnimeScrollReveal } from '../hooks/useAnimeScrollReveal';
import SectionHeading from './SectionHeading';

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

const fileNames = ['internship.log', 'education.log'];

const Experience = () => {
  const ref = useAnimeScrollReveal('.exp-reveal', { stagger: 140, distance: 40 });

  return (
    <section id="experience" ref={ref} className="section-padding">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Experience" className="exp-reveal">
          Internship execution, academic foundation, and product-minded engineering presented as a focused timeline
          for recruiters and collaborators.
        </SectionHeading>

        <div className="space-y-10">
          {experience.map((item, index) => {
            const Icon = item.icon;
            const chips = index === 0 ? meta : educationMeta;
            return (
              <article key={`${item.title}-${item.company}`} className="exp-reveal brut-box brut-hover overflow-hidden">
                <div className="win-bar">
                  <div className="win-dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="win-title">{fileNames[index] ?? 'entry.log'}</span>
                  <span className="win-chip">{item.period}</span>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-5">
                    <div className="icon-shell">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="card-title">{item.title}</h3>
                      <p className="mt-1 font-mono text-sm font-semibold text-muted">{item.company}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {chips.map(([label, value]) => (
                      <div key={label} className="meta-chip">
                        <span>{label}</span>
                        <strong>{value}</strong>
                      </div>
                    ))}
                  </div>

                  <ul className="mt-6 space-y-3">
                    {item.points.map((point) => (
                      <li key={point} className="bullet-row">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
