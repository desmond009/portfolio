import { FaPaperPlane } from 'react-icons/fa';
import { contactLinks, profile } from '../data/portfolio';
import { useAnimeScrollReveal } from '../hooks/useAnimeScrollReveal';
import SectionHeading from './SectionHeading';

const Contact = () => {
  const ref = useAnimeScrollReveal('.contact-reveal', { stagger: 110 });

  return (
    <section id="contact" ref={ref} className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Get in touch" className="contact-reveal">
          I am open to internship opportunities, collaborative projects, and full-stack/Web3 roles where clean
          execution matters.
        </SectionHeading>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="contact-reveal brut-box p-6 sm:p-8">
              <p className="font-mono text-xl font-bold leading-snug sm:text-2xl">
                Let’s build something polished, useful, and technically solid.
              </p>
            </div>

            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === 'Email' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="contact-reveal brut-box brut-hover contact-row"
                >
                  <span className="icon-shell">
                    <Icon />
                  </span>
                  <span className="min-w-0">
                    <span className="contact-row-label">{link.label}</span>
                    <span className="contact-row-value">{link.value}</span>
                  </span>
                </a>
              );
            })}
          </div>

          <form className="contact-reveal brut-box brut-box-lg overflow-hidden" action={`mailto:${profile.email}`} method="post" encType="text/plain">
            <div className="win-bar">
              <div className="win-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="win-title">New_message.txt</span>
              <span className="win-chip">Draft</span>
            </div>

            <div className="space-y-5 p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="field-label">
                  Name
                  <input name="name" className="field-input" placeholder="Your name" />
                </label>
                <label className="field-label">
                  Email
                  <input name="email" type="email" className="field-input" placeholder="you@example.com" />
                </label>
              </div>
              <label className="field-label">
                Subject
                <input name="subject" className="field-input" placeholder="Internship / project opportunity" />
              </label>
              <label className="field-label">
                Message
                <textarea name="message" rows="6" className="field-input resize-none" placeholder="Tell me about the role, product, or idea." />
              </label>
              <button type="submit" data-autter-action="contact-submit" className="brut-btn w-full sm:w-auto">
                <FaPaperPlane />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
