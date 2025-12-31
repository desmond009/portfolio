import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFire, FaCoins, FaLink, FaEthereum } from 'react-icons/fa';
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiSolana,
  SiVite,
  SiEthereum,
  SiDocker,
  SiSolidity,
  SiSocketdotio,
} from 'react-icons/si';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'SoulScript',
      period: 'Apr 2025 – Jun 2025',
      description:
        'A modern quote library with live API integration, featuring Firebase authentication, auto-tagging, filtering, and favorites functionality. Built with polished UI animations using Framer Motion.',
      techStack: ['React', 'Firebase', 'Framer Motion', 'ZenQuotes API'],
      icons: [<SiReact key="react" />, <SiFirebase key="firebase" />],
      features: [
        'Firebase Auth (Google + Email)',
        'Live API Integration',
        'Auto-tagging & Filtering',
        'Favorites Functionality',
        'Smooth Animations',
      ],
      github: 'https://github.com/desmond009/SoulScript',
      demo: null,
      color: 'from-primary-teal to-primary-cyan',
      icon: <FaFire className="w-6 h-6" />,
    },
    {
      title: 'Sol Faucet',
      period: 'Jul 2025 – Jul 2025',
      description:
        'Full-stack Solana Devnet Faucet application with Phantom Wallet integration. Features SOL transfers, airdrops, real-time balance updates, and transaction tracking with a modular tabbed UI.',
      techStack: ['React', 'Vite', 'Solana', 'Phantom Wallet'],
      icons: [<SiReact key="react" />, <SiVite key="vite" />, <SiSolana key="solana" />],
      features: [
        'Phantom Wallet Integration',
        'SOL Transfers & Airdrops',
        'Real-time Balance Updates',
        'Transaction Tracking',
        'Modular Tabbed UI',
      ],
      github: 'https://github.com/desmond009/Sol_Faucet',
      demo: null,
      color: 'from-primary-cyan to-secondary-blue',
      icon: <FaCoins className="w-6 h-6" />,
    },
    {
      title: 'Minilink',
      period: 'Aug 2025 – Oct 2025',
      description:
        'Full-stack URL shortener with advanced features including QR code generation/scanner, analytics tracking, and comprehensive authentication. Built with modern UI using React Three Fiber and Chart.js.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'OAuth'],
      icons: [<SiReact key="react" />, <SiNodedotjs key="node" />, <SiMongodb key="mongo" />],
      features: [
        'URL Shortening',
        'QR Code Generator/Scanner',
        'Analytics Tracking',
        'JWT + OAuth Auth',
        'Modern UI with 3D Elements',
      ],
      github: 'https://github.com/desmond009/Minilink',
      demo: null,
      color: 'from-secondary-blue to-primary-teal',
      icon: <FaLink className="w-6 h-6" />,
    },
    {
      title: 'OrcaEarn',
      period: '2025',
      subtitle: 'Ethereum Staking Protocol | Sepolia Testnet',
      description:
        'Non-custodial staking dApp. Stake ETH → Earn ORCA tokens → Claim anytime. Gas-optimized smart contracts + React 19 frontend with real-time dashboards and MetaMask integration.',
      techStack: ['Solidity', 'Foundry', 'React 19', 'Wagmi', 'TanStack Query', 'Tailwind CSS'],
      icons: [<SiEthereum key="ethereum" />, <SiReact key="react" />, <SiVite key="vite" />],
      features: [
        'Stake/Unstake ETH (No lock-up)',
        'Claim ORCA rewards in real-time',
        'O(1) gas-optimized calculations',
        'MetaMask wallet integration',
        'Real-time balance tracking',
      ],
      github: 'https://github.com/desmond009/OrcaEarn',
      demo: null,
      color: 'from-primary-teal via-primary-cyan to-secondary-blue',
      icon: <FaEthereum className="w-6 h-6" />,
    },
    {
      title: 'TollChain',
      period: '2025',
      subtitle: 'Automated Toll Collection | Web2/Web3 Hybrid | Privacy-First',
      description:
        'Production-ready toll collection system with Zero-Knowledge Proofs, smart contract factory pattern, WebRTC QR scanning, and real-time settlement via Socket.io.',
      techStack: ['React 19', 'Node.js', 'Solidity', 'Foundry', 'MongoDB', 'Wagmi', 'Socket.io', 'Docker', 'ZKP'],
      icons: [<SiReact key="react" />, <SiNodedotjs key="node" />, <SiDocker key="docker" />, <SiSolidity key="solidity" />],
      features: [
        'ZKP-based identity (Anonymous Aadhaar)',
        'Factory pattern: TopUpWalletFactory + TollCollection',
        'WebRTC QR scanning with 5-min encrypted codes',
        'Socket.io real-time payment confirmation',
        'OCR license plate validation + RBAC admin dashboard',
      ],
      github: 'https://github.com/desmond009/TollCrypt',
      demo: null,
      color: 'from-secondary-blue via-primary-cyan to-primary-teal',
      icon: <SiSocketdotio className="w-6 h-6" />,
    },
  ];

  return (
    <section id="projects" ref={ref} className="section-padding bg-dark-secondary/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-teal to-primary-cyan mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)' }}
              className="bg-dark-base/50 rounded-lg border border-primary-teal/20 overflow-hidden glow-effect group"
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.color} p-6`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-white">{project.icon}</div>
                  <div className="flex gap-3">
                    {project.icons.map((icon, i) => (
                      <span key={i} className="text-white/80">{icon}</span>
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                {project.subtitle && (
                  <p className="text-white/90 text-xs font-medium mb-1">{project.subtitle}</p>
                )}
                <p className="text-white/80 text-sm">{project.period}</p>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-text-light/80 mb-4 leading-relaxed">{project.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary-teal mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-text-light/70 flex items-center gap-2">
                        <span className="text-primary-cyan">▹</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary-teal mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-dark-secondary/50 text-primary-cyan rounded border border-primary-cyan/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-dark-secondary/50 text-text-light rounded hover:bg-primary-teal/20 hover:text-primary-teal transition-colors border border-primary-teal/20"
                  >
                    <FaGithub />
                    <span className="text-sm">Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-dark-secondary/50 text-text-light rounded hover:bg-primary-teal/20 hover:text-primary-teal transition-colors border border-primary-teal/20"
                    >
                      <FaExternalLinkAlt />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

