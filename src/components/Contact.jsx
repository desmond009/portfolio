import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import { FaPaperPlane } from 'react-icons/fa';
import { contactLinks, profile } from '../data/portfolio';
import { useAnimeScrollReveal } from '../hooks/useAnimeScrollReveal';

const Contact = () => {
  const ref = useAnimeScrollReveal('.contact-reveal', { stagger: 110 });
  const formRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return undefined;

    const fields = form.querySelectorAll('input, textarea, button');
    const handleFocus = (event) => {
      animate(event.currentTarget, {
        scale: 1.015,
        duration: 250,
        ease: 'outQuad',
      });
    };
    const handleBlur = (event) => {
      animate(event.currentTarget, {
        scale: 1,
        duration: 300,
        ease: 'outExpo',
      });
    };

    // Form field micro-interactions are handled with anime.js for subtle tactile feedback.
    fields.forEach((field) => {
      field.addEventListener('focus', handleFocus);
      field.addEventListener('blur', handleBlur);
    });

    return () => {
      fields.forEach((field) => {
        field.removeEventListener('focus', handleFocus);
        field.removeEventListener('blur', handleBlur);
      });
    };
  }, []);

  return (
    <section id="contact" ref={ref} className="section-padding relative overflow-hidden">
      <div className="section-halo right-[-10%] bottom-10 bg-neon/10" />
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="contact-reveal section-kicker">Contact</p>
          <h2 className="contact-reveal section-title">Let’s build something polished, useful, and technically solid.</h2>
          <p className="contact-reveal mt-5 leading-8 text-slate-300">
            I am open to internship opportunities, collaborative projects, and full-stack/Web3 roles where clean
            execution matters.
          </p>

          <div className="mt-8 space-y-4">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a key={link.label} href={link.href} target={link.label === 'Email' ? undefined : '_blank'} rel="noopener noreferrer" className="contact-reveal glass-card flex items-center gap-4 p-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                    <Icon />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{link.label}</span>
                    <span className="text-white">{link.value}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <form ref={formRef} className="contact-reveal glass-card p-5 sm:p-7" action={`mailto:${profile.email}`} method="post" encType="text/plain">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="field-label">
              Name
              <input name="name" className="field-input" placeholder="Your name" />
            </label>
            <label className="field-label">
              Email
              <input name="email" type="email" className="field-input" placeholder="you@example.com" />
            </label>
          </div>
          <label className="field-label mt-4">
            Subject
            <input name="subject" className="field-input" placeholder="Internship / project opportunity" />
          </label>
          <label className="field-label mt-4">
            Message
            <textarea name="message" rows="6" className="field-input resize-none" placeholder="Tell me about the role, product, or idea." />
          </label>
          <button type="submit" className="magnetic-btn primary-btn mt-6 w-full justify-center">
            <FaPaperPlane />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
