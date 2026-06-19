import {
  FaAppStoreIos,
  FaBriefcase,
  FaCode,
  FaDatabase,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaRocket,
} from 'react-icons/fa';
import {
  SiAppwrite,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiMongodb,
  SiSolana,
  SiSolidity,
  SiTailwindcss,
} from 'react-icons/si';

export const profile = {
  name: 'Vijender Yadav',
  role: 'Full-Stack Developer | Web3 Developer | Engineering Student',
  email: 'ragnarviju2004@gmail.com',
  github: 'https://github.com/desmond009',
  linkedin: 'https://linkedin.com/in/vijender-yadav-iiit',
};

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const stats = [
  { value: '05', label: 'Featured builds' },
  { value: '10+', label: 'Core technologies' },
  { value: '02', label: 'Web3 ecosystems' },
  { value: '2027', label: 'B.Tech CSE' },
];

export const skills = [
  { name: 'React', icon: FaReact, accent: 'cyan' },
  { name: 'Node.js', icon: FaNodeJs, accent: 'green' },
  { name: 'Express', icon: SiExpress, accent: 'white' },
  { name: 'MongoDB', icon: SiMongodb, accent: 'green' },
  { name: 'Firebase', icon: SiFirebase, accent: 'amber' },
  { name: 'Appwrite', icon: SiAppwrite, accent: 'pink' },
  { name: 'Solana', icon: SiSolana, accent: 'violet' },
  { name: 'Solidity', icon: SiSolidity, accent: 'cyan' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, accent: 'cyan' },
  { name: 'Git', icon: SiGit, accent: 'orange' },
  { name: 'GitHub', icon: SiGithub, accent: 'white' },
];

export const projects = [
  {
    title: 'SoulScript',
    description:
      'A polished quote and reflection library with authentication, favorites, filtering, and live API integration.',
    stack: ['React', 'Firebase', 'API', 'Animations'],
    github: 'https://github.com/desmond009/SoulScript',
    live: '#',
    icon: FaRocket,
    gradient: 'from-emerald-400 via-cyan-300 to-blue-500',
  },
  {
    title: 'Minilink',
    description:
      'Full-stack URL shortener with QR tooling, analytics tracking, modern auth, and a fast dashboard experience.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/desmond009/Minilink',
    live: '#',
    icon: FaExternalLinkAlt,
    gradient: 'from-cyan-300 via-sky-400 to-emerald-300',
  },
  {
    title: 'Sol Faucet',
    description:
      'Solana Devnet faucet with Phantom wallet connection, balance updates, transfers, and transaction tracking.',
    stack: ['React', 'Vite', 'Solana', 'Phantom'],
    github: 'https://github.com/desmond009/Sol_Faucet',
    live: '#',
    icon: SiSolana,
    gradient: 'from-lime-300 via-emerald-400 to-cyan-400',
  },
  {
    title: 'ORCA Staking',
    description:
      'Web3 staking interface for earning ORCA-style rewards with wallet flows, status panels, and contract actions.',
    stack: ['Solidity', 'React', 'Wagmi', 'Tailwind'],
    github: 'https://github.com/desmond009/OrcaEarn',
    live: '#',
    icon: SiSolidity,
    gradient: 'from-teal-300 via-cyan-400 to-indigo-500',
  },
  {
    title: 'Appwrite Blog',
    description:
      'A production-minded blog platform powered by Appwrite auth, database storage, and clean publishing flows.',
    stack: ['React', 'Appwrite', 'Tailwind', 'Auth'],
    github: 'https://github.com/desmond009',
    live: '#',
    icon: SiAppwrite,
    gradient: 'from-fuchsia-400 via-cyan-300 to-emerald-300',
  },
];

export const experience = [
  {
    title: 'Full-Stack Developer Intern',
    company: 'HobbyFi',
    period: 'Internship Experience',
    icon: FaBriefcase,
    points: [
      'Worked on responsive web interfaces and production-focused frontend workflows.',
      'Collaborated across product requirements, implementation details, and UI quality checks.',
      'Strengthened practical full-stack development habits through real feature delivery.',
    ],
  },
  {
    title: 'Bachelor of Technology, Computer Science',
    company: 'Indian Institute of Information Technology, Dharwad',
    period: '2023 - 2027',
    icon: FaGraduationCap,
    points: [
      'Focused on data structures, algorithms, databases, operating systems, and software engineering.',
      'Building applied projects across full-stack JavaScript, cloud services, and blockchain ecosystems.',
    ],
  },
];

export const contactLinks = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: FaEnvelope },
  { label: 'LinkedIn', value: 'vijender-yadav-iiit', href: profile.linkedin, icon: FaLinkedin },
  { label: 'GitHub', value: 'desmond009', href: profile.github, icon: FaGithub },
];

export const processCards = [
  { title: 'Product Thinking', text: 'I care about flows, edge cases, and recruiter-visible polish.', icon: FaAppStoreIos },
  { title: 'System Building', text: 'I connect frontend detail with backend contracts and database design.', icon: FaDatabase },
  { title: 'Web3 Execution', text: 'I build wallet-connected dApps with clear transaction feedback.', icon: FaCode },
];
