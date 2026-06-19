import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#020608] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 text-sm text-slate-500 sm:px-6 md:flex-row lg:px-8">
        <p>© {currentYear} Vijender Yadav. Built with React, Vite, Tailwind CSS, and anime.js.</p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="transition hover:text-neon" aria-label="GitHub">
            <FaGithub className="h-5 w-5" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-cyan-300" aria-label="LinkedIn">
            <FaLinkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
