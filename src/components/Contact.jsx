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
    <section id="contact" ref={ref} className="contact-premium section-padding relative overflow-hidden">
      <div className="contact-red-slab" aria-hidden="true" />
      <div className="contact-paper-line" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="contact-reveal contact-kicker">Contact</p>
          <h2 className="contact-reveal contact-title">Let’s build something polished, useful, and technically solid.</h2>
          <p className="contact-reveal contact-copy mt-6">
            I am open to internship opportunities, collaborative projects, and full-stack/Web3 roles where clean
            execution matters.
          </p>

          <div className="mt-8 space-y-4">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a key={link.label} href={link.href} target={link.label === 'Email' ? undefined : '_blank'} rel="noopener noreferrer" className="contact-reveal contact-link-card">
                  <span className="contact-link-icon">
                    <Icon />
                  </span>
                  <span>
                    <span className="contact-link-label">{link.label}</span>
                    <span className="contact-link-value">{link.value}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <form ref={formRef} className="contact-reveal contact-form-card" action={`mailto:${profile.email}`} method="post" encType="text/plain">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="contact-field-label">
              Name
              <input name="name" className="contact-field-input" placeholder="Your name" />
            </label>
            <label className="contact-field-label">
              Email
              <input name="email" type="email" className="contact-field-input" placeholder="you@example.com" />
            </label>
          </div>
          <label className="contact-field-label mt-4">
            Subject
            <input name="subject" className="contact-field-input" placeholder="Internship / project opportunity" />
          </label>
          <label className="contact-field-label mt-4">
            Message
            <textarea name="message" rows="6" className="contact-field-input resize-none" placeholder="Tell me about the role, product, or idea." />
          </label>
          <button type="submit" className="magnetic-btn contact-submit-btn">
            <FaPaperPlane />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
