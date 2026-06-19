import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '../data/portfolio';
import { useAnimeScrollReveal } from '../hooks/useAnimeScrollReveal';

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const Icon = project.icon;

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return undefined;

    const handleMove = (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 10;
      const rotateX = ((0.5 - y / rect.height) * 10);

      // Pointer-driven anime.js tilt/glow gives cards depth without introducing heavy 3D dependencies.
      animate(card, {
        rotateX,
        rotateY,
        translateY: -8,
        duration: 260,
        ease: 'outQuad',
      });
      card.style.setProperty('--spotlight-x', `${x}px`);
      card.style.setProperty('--spotlight-y', `${y}px`);
    };

    const handleLeave = () => {
      animate(card, {
        rotateX: 0,
        rotateY: 0,
        translateY: 0,
        duration: 500,
        ease: 'outExpo',
      });
    };

    card.addEventListener('pointermove', handleMove);
    card.addEventListener('pointerleave', handleLeave);
    return () => {
      card.removeEventListener('pointermove', handleMove);
      card.removeEventListener('pointerleave', handleLeave);
    };
  }, []);

  return (
    <article ref={cardRef} className="project-card reveal-project glass-card group overflow-hidden">
      <div className="relative h-52 overflow-hidden border-b border-white/10 bg-[#02080b]">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
        <div className="absolute inset-0 project-pattern" />
        <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
          <div>
            <span className="mb-3 inline-flex rounded-full border border-white/20 bg-black/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
              Featured
            </span>
            <h3 className="text-3xl font-black text-white">{project.title}</h3>
          </div>
          <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/25 bg-black/25 text-white backdrop-blur-md">
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="min-h-24 leading-7 text-slate-300">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-1 text-xs font-medium text-cyan-100">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-7 flex gap-3">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label={`${project.title} GitHub`}>
            <FaGithub />
            GitHub
          </a>
          <a href={project.live} className="icon-link" aria-label={`${project.title} live link`}>
            <FaExternalLinkAlt />
            Live
          </a>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const ref = useAnimeScrollReveal('.reveal-project', { stagger: 120, distance: 48 });

  return (
    <section id="projects" ref={ref} className="section-padding relative overflow-hidden">
      <div className="section-halo left-1/4 top-32 bg-cyan-300/10" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="section-kicker">Projects</p>
          <h2 className="section-title">Selected builds with real product surfaces and recruiter-ready presentation.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
