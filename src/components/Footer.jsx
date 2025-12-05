import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-base border-t border-primary-teal/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-text-light/60 text-sm">
            <p>
              © {currentYear} Vijender Yadav. All rights reserved.
            </p>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-text-light/60 text-sm">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-red-500"
            >
              <FaHeart />
            </motion.span>
            <span>using React & Tailwind CSS</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/desmond009"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-light/60 hover:text-primary-teal transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/vijender-yadav-iiit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-light/60 hover:text-primary-cyan transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://leetcode.com/u/code_nova_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-light/60 hover:text-primary-teal transition-colors duration-300"
              aria-label="LeetCode"
            >
              <SiLeetcode className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/Vij_yadav_viju"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-light/60 hover:text-primary-teal transition-colors duration-300"
              aria-label="X (Twitter)"
            >
              <FaXTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/by_vijender.eth/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-light/60 hover:text-primary-cyan transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

