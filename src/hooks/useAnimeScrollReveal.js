import { useEffect, useRef } from 'react';
import { animate, utils } from 'animejs';

const { stagger } = utils;

export function useAnimeScrollReveal(selector = '.reveal-item', options = {}) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const items = root.querySelectorAll(selector);
    if (!items.length) return undefined;

    items.forEach((item) => {
      item.style.opacity = '0';
      item.style.transform = `translateY(${options.distance || 34}px)`;
    });

    // IntersectionObserver keeps scroll-triggered anime.js reveals performant and one-shot.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        animate(items, {
          opacity: [0, 1],
          translateY: [options.distance || 34, 0],
          duration: options.duration || 850,
          delay: stagger(options.stagger || 90),
          ease: options.ease || 'outExpo',
        });

        observer.disconnect();
      },
      { threshold: options.threshold || 0.2 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, [options.distance, options.duration, options.ease, options.stagger, options.threshold, selector]);

  return rootRef;
}
