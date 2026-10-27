import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '../data/portfolio';
import { useAnimeScrollReveal } from '../hooks/useAnimeScrollReveal';
import SectionHeading from './SectionHeading';

const toFileName = (title) => `${title.replace(/\s+/g, '_').toUpperCase()}.EXE`;

const Projects = () => {
  const ref = useAnimeScrollReveal('.project-reveal', { stagger: 120, distance: 40 });

  return (
    <section id="projects" ref={ref} className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Featured Projects" className="project-reveal" />

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <article key={project.title} className="project-reveal brut-box brut-hover flex flex-col overflow-hidden">
                <div className="win-bar">
                  <div className="win-dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="win-title">{toFileName(project.title)}</span>
                  <span className="win-chip">{index % 2 === 0 ? 'Deployed' : 'Live'}</span>
                </div>

                <div className="dot-panel relative flex h-44 items-center justify-center border-b-2 border-ink">
                  <div className="icon-shell h-20 w-20 text-4xl">
                    <Icon />
                  </div>
                  <span className="tech-tag absolute left-4 top-4 bg-card">{project.metrics[0]}</span>
                  <span className="tech-tag absolute bottom-4 right-4 bg-card">{project.metrics[1]}</span>
                  <span className="absolute bottom-3 left-4 font-mono text-5xl font-extrabold text-chip/60">
                    0{index + 1}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    {project.eyebrow}
                  </p>
                  <h3 className="mt-2 font-mono text-2xl font-extrabold sm:text-3xl">{project.title}</h3>
                  <p className="card-copy mt-3">{project.featureTitle}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-4 pt-7">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="brut-btn min-h-11 px-5 text-xs sm:px-5">
                      <FaGithub />
                      GitHub
                    </a>
                    <a href={project.live} className="brut-btn brut-btn-ghost min-h-11 px-5 text-xs sm:px-5" aria-label={`${project.title} live preview`}>
                      <FaExternalLinkAlt />
                      Live
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
