import { useEffect } from 'react';
import { animate } from 'animejs';

export function useAnimeButtons() {
  useEffect(() => {
    const buttons = document.querySelectorAll('.magnetic-btn');
    if (!buttons.length) return undefined;

    const handleEnter = (event) => {
      // Shared anime.js button micro-interaction for CTAs and form submit controls.
      animate(event.currentTarget, {
        scale: 1.045,
        translateY: -2,
        duration: 220,
        ease: 'outQuad',
      });
    };

    const handleLeave = (event) => {
      animate(event.currentTarget, {
        scale: 1,
        translateY: 0,
        duration: 360,
        ease: 'outExpo',
      });
    };

    const handleDown = (event) => {
      animate(event.currentTarget, {
        scale: 0.97,
        duration: 120,
        ease: 'outQuad',
      });
    };

    buttons.forEach((button) => {
      button.addEventListener('pointerenter', handleEnter);
      button.addEventListener('pointerleave', handleLeave);
      button.addEventListener('pointerdown', handleDown);
      button.addEventListener('pointerup', handleEnter);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener('pointerenter', handleEnter);
        button.removeEventListener('pointerleave', handleLeave);
        button.removeEventListener('pointerdown', handleDown);
        button.removeEventListener('pointerup', handleEnter);
      });
    };
  }, []);
}
