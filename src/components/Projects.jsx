import { useEffect, useRef, useState } from 'react';
import { animate, createTimeline, utils } from 'animejs';
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '../data/portfolio';
import { useAnimeScrollReveal } from '../hooks/useAnimeScrollReveal';

const { stagger } = utils;

const ProjectZineCard = ({ project, index, isActive, onActivate }) => {
  const cardRef = useRef(null);
  const Icon = project.icon;

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return undefined;

    const layers = card.querySelectorAll('.zine-layer');
    const scan = card.querySelector('.zine-card-scan');

    // Designer-style project card motion: layered parallax plus a quick editorial "snap" on hover.
    const idleAnimation = animate(layers, {
      translateY: (_, layerIndex) => [0, layerIndex % 2 === 0 ? -8 : 8, 0],
      rotate: (_, layerIndex) => [0, layerIndex % 2 === 0 ? 1.8 : -1.8, 0],
      duration: (_, layerIndex) => 3600 + layerIndex * 420,
      delay: stagger(150),
      loop: true,
      ease: 'inOutSine',
    });

    const handleMove = (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 7;
      const rotateX = (0.5 - y / rect.height) * 7;

      animate(card, {
        rotateX,
        rotateY,
        translateY: -10,
        duration: 240,
        ease: 'outQuad',
      });
      animate(scan, {
        translateX: ['-120%', '180%'],
        opacity: [0, 0.85, 0],
        duration: 780,
        ease: 'outExpo',
      });
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

    card.addEventListener('pointermove', handleMove);
    card.addEventListener('pointerleave', handleLeave);
    return () => {
      idleAnimation.revert();
      card.removeEventListener('pointermove', handleMove);
      card.removeEventListener('pointerleave', handleLeave);
    };
  }, []);

  return (
    <article
      ref={cardRef}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      className={`zine-project-card reveal-project ${isActive ? 'zine-project-card-active' : ''}`}
      tabIndex={0}
    >
      <div className="zine-rip-corner">RIP</div>
      <div className="zine-card-scan" />
      <div className="relative z-10 flex min-h-[31rem] flex-col">
        <div className={`zine-card-poster bg-gradient-to-br ${project.gradient}`}>
          <div className="zine-layer zine-ghost-number">0{index + 1}</div>
          <div className="zine-layer zine-noise-grid" />
          <span className="zine-status">+ {index % 2 === 0 ? 'Deployed' : 'Live'}</span>
          <div className="zine-layer zine-icon-box">
            <Icon className="h-12 w-12" />
          </div>
          <span className="zine-layer zine-mini-chip top-20 right-5">{project.metrics[0]}</span>
          <span className="zine-layer zine-mini-chip bottom-7 left-5">{project.metrics[1]}</span>
        </div>

        <div className="flex flex-1 flex-col border-t border-black/80 bg-[#f2ecd8] p-5 text-[#10100d]">
          <div className="mb-3 flex items-start justify-between gap-3">
            <div>
              <p className="font-mono text-[10px] font-black uppercase tracking-[0.28em] text-[#ef3d18]">
                {project.eyebrow}
              </p>
              <h3 className="mt-2 text-3xl font-black leading-none tracking-tight">{project.title}</h3>
            </div>
            <span className="shrink-0 font-mono text-5xl font-black leading-none text-black/14">0{index + 1}</span>
          </div>

          <p className="line-clamp-3 min-h-20 text-sm font-semibold leading-6 text-black/70">{project.featureTitle}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((tech) => (
              <span key={tech} className="zine-tech-tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between gap-3 pt-5">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="zine-card-link" aria-label={`${project.title} GitHub`}>
              <FaGithub />
              GitHub
            </a>
            <a href={project.live} className="zine-card-link" aria-label={`${project.title} live preview`}>
              <FaExternalLinkAlt />
              Live
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const sectionRef = useAnimeScrollReveal('.reveal-project', { stagger: 120, distance: 46 });
  const railRef = useRef(null);
  const headingRef = useRef(null);
  const dragState = useRef({ active: false, startX: 0, scrollLeft: 0 });
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return undefined;

    const words = heading.querySelectorAll('.zine-heading-word');

    // Oversized heading enters with a punchy editorial stagger, matching the recorded zine reference.
    const timeline = createTimeline({ defaults: { ease: 'outExpo' } });
    timeline
      .add(words, {
        opacity: [0, 1],
        translateY: [70, 0],
        rotateX: [-45, 0],
        duration: 900,
        delay: stagger(90),
      })
      .add(
        '.zine-red-rule',
        {
          scaleX: [0, 1],
          duration: 760,
        },
        '-=520',
      );

    return () => timeline.revert();
  }, []);

  useEffect(() => {
    const cards = railRef.current?.querySelectorAll('.zine-project-card');
    if (!cards?.length) return undefined;

    const animation = animate(cards, {
      opacity: (_, index) => (index === activeProject ? 1 : 0.68),
      scale: (_, index) => (index === activeProject ? 1 : 0.94),
      duration: 520,
      delay: stagger(28),
      ease: 'outExpo',
    });

    return () => animation.revert();
  }, [activeProject]);

  const scrollToProject = (index) => {
    const rail = railRef.current;
    const card = rail?.querySelectorAll('.zine-project-card')[index];
    if (!rail || !card) return;

    setActiveProject(index);
    rail.scrollTo({
      left: card.offsetLeft - rail.offsetLeft - 24,
      behavior: 'smooth',
    });
  };

  const goToPrevious = () => {
    scrollToProject(activeProject === 0 ? projects.length - 1 : activeProject - 1);
  };

  const goToNext = () => {
    scrollToProject(activeProject === projects.length - 1 ? 0 : activeProject + 1);
  };

  const handlePointerDown = (event) => {
    const rail = railRef.current;
    if (!rail) return;

    dragState.current = {
      active: true,
      startX: event.pageX - rail.offsetLeft,
      scrollLeft: rail.scrollLeft,
    };
    rail.classList.add('zine-rail-dragging');
  };

  const handlePointerMove = (event) => {
    const rail = railRef.current;
    if (!rail || !dragState.current.active) return;

    event.preventDefault();
    const x = event.pageX - rail.offsetLeft;
    rail.scrollLeft = dragState.current.scrollLeft - (x - dragState.current.startX) * 1.25;
  };

  const stopDragging = () => {
    const rail = railRef.current;
    dragState.current.active = false;
    rail?.classList.remove('zine-rail-dragging');
  };

  return (
    <section id="projects" ref={sectionRef} className="zine-projects-section section-padding relative overflow-hidden">
      <div className="zine-paper-glow left-[-12rem] top-10 bg-[#ef3d18]/16" />
      <div className="zine-paper-glow right-[-12rem] bottom-0 bg-neon/10" />

      <div className="mx-auto max-w-7xl">
        <div ref={headingRef} className="reveal-project">
          <div className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="zine-label">The Zine</div>
              <h2 className="mt-5 overflow-hidden text-[4.4rem] font-black leading-[0.82] tracking-tight text-[#f2ecd8] sm:text-[7rem] lg:text-[9rem]">
                <span className="zine-heading-word block opacity-0">FEATURED</span>
                <span className="zine-heading-word block text-[#ef3d18] opacity-0">PROJECTS</span>
              </h2>
            </div>
            <div className="max-w-md">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-500">
                Scroll or drag through the project zine. Rip corners reveal the card confessions.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <button type="button" onClick={goToPrevious} className="zine-arrow" aria-label="Previous project">
                  <FaArrowLeft />
                </button>
                <button type="button" onClick={goToNext} className="zine-arrow zine-arrow-active" aria-label="Next project">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
          <div className="zine-red-rule origin-left" />
        </div>

        <div
          ref={railRef}
          className="reveal-project zine-project-rail"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={stopDragging}
          onPointerLeave={stopDragging}
        >
          {projects.map((project, index) => (
            <ProjectZineCard
              key={project.title}
              project={project}
              index={index}
              isActive={activeProject === index}
              onActivate={() => setActiveProject(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
