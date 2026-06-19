import { skills } from '../data/portfolio';
import { useAnimeScrollReveal } from '../hooks/useAnimeScrollReveal';

const accentClasses = {
  cyan: 'text-cyan-300 bg-cyan-300/10 border-cyan-300/20',
  green: 'text-neon bg-neon/10 border-neon/20',
  white: 'text-white bg-white/10 border-white/15',
  amber: 'text-amber-300 bg-amber-300/10 border-amber-300/20',
  pink: 'text-pink-300 bg-pink-300/10 border-pink-300/20',
  violet: 'text-violet-300 bg-violet-300/10 border-violet-300/20',
  orange: 'text-orange-300 bg-orange-300/10 border-orange-300/20',
};

const Skills = () => {
  const ref = useAnimeScrollReveal('.skill-card', { stagger: 60 });

  return (
    <section id="skills" ref={ref} className="section-padding relative overflow-hidden bg-[#050b0e]">
      <div className="section-halo right-[-12%] top-24 bg-neon/10" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="section-kicker">Skills</p>
            <h2 className="section-title">A compact stack for shipping full-stack and Web3 products.</h2>
          </div>
          <p className="max-w-md leading-7 text-slate-400">
            Frontend polish, backend structure, database design, cloud services, and wallet-connected blockchain flows.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div key={skill.name} className="skill-card group glass-card min-h-36 p-5">
                <div className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl border ${accentClasses[skill.accent]}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-white">{skill.name}</h3>
                <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-neon to-cyan-300 transition-all duration-500 group-hover:w-full" />
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
