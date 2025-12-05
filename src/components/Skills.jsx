import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaReact,
  FaNode,
  FaDatabase,
  FaCode,
  FaEthereum,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
} from 'react-icons/fa';
import { SiNextdotjs, SiVite, SiTailwindcss, SiMongodb, SiMysql, SiFirebase, SiSolana } from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      category: 'Languages',
      icon: <FaCode className="w-6 h-6" />,
      skills: [
        { name: 'C++', icon: <FaCode className="w-5 h-5" /> },
        { name: 'C', icon: <FaCode className="w-5 h-5" /> },
        { name: 'Java', icon: <FaJava className="w-5 h-5" /> },
        { name: 'JavaScript', icon: <FaJs className="w-5 h-5" /> },
      ],
    },
    {
      category: 'Frontend',
      icon: <FaReact className="w-6 h-6" />,
      skills: [
        { name: 'React.js', icon: <FaReact className="w-5 h-5" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="w-5 h-5" /> },
        { name: 'Vite', icon: <SiVite className="w-5 h-5" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-5 h-5" /> },
        { name: 'HTML/CSS', icon: <div className="flex gap-1"><FaHtml5 className="w-5 h-5" /><FaCss3Alt className="w-5 h-5" /></div> },
      ],
    },
    {
      category: 'Backend',
      icon: <FaNode className="w-6 h-6" />,
      skills: [
        { name: 'Node.js', icon: <FaNode className="w-5 h-5" /> },
        { name: 'Express.js', icon: <FaNode className="w-5 h-5" /> },
        { name: 'JWT', icon: <FaCode className="w-5 h-5" /> },
        { name: 'OAuth', icon: <FaCode className="w-5 h-5" /> },
      ],
    },
    {
      category: 'Databases',
      icon: <FaDatabase className="w-6 h-6" />,
      skills: [
        { name: 'MongoDB', icon: <SiMongodb className="w-5 h-5" /> },
        { name: 'MySQL', icon: <SiMysql className="w-5 h-5" /> },
        { name: 'Firebase', icon: <SiFirebase className="w-5 h-5" /> },
        { name: 'Appwrite', icon: <FaDatabase className="w-5 h-5" /> },
      ],
    },
    {
      category: 'Blockchain/Web3',
      icon: <FaEthereum className="w-6 h-6" />,
      skills: [
        { name: 'Solana', icon: <SiSolana className="w-5 h-5" /> },
        { name: 'Phantom Wallet', icon: <FaEthereum className="w-5 h-5" /> },
        { name: 'Devnet Integration', icon: <FaCode className="w-5 h-5" /> },
        { name: 'Solidity', icon: <FaEthereum className="w-5 h-5" /> },
    ],
    },
    {
      category: 'Tools & Platforms',
      icon: <FaGitAlt className="w-6 h-6" />,
      skills: [
        { name: 'Git', icon: <FaGitAlt className="w-5 h-5" /> },
        { name: 'GitHub', icon: <FaGitAlt className="w-5 h-5" /> },
        { name: 'Linux', icon: <FaCode className="w-5 h-5" /> },
        { name: 'REST APIs', icon: <FaCode className="w-5 h-5" /> },
      ],
    },
  ];

  return (
    <section id="skills" ref={ref} className="section-padding bg-dark-base">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono mb-4">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-teal to-primary-cyan mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)' }}
              className="bg-dark-secondary/50 p-6 rounded-lg border border-primary-teal/20 glow-effect"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-primary-teal">{category.icon}</div>
                <h3 className="text-xl font-semibold text-text-light">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 px-3 py-2 bg-dark-base/50 rounded-md border border-primary-cyan/20 text-sm text-text-light/90 hover:border-primary-teal transition-colors"
                  >
                    <span className="text-primary-teal">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

