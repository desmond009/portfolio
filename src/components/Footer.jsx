import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-ink bg-paper py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 font-mono text-xs text-muted sm:px-6 sm:text-sm md:flex-row lg:px-8">
        <p>© {currentYear} Vijender Yadav. Built with React, Vite, Tailwind CSS, and anime.js.</p>
        <div className="flex items-center gap-3">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-sq h-10 w-10" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon-sq h-10 w-10" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
