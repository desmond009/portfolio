import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="section-padding bg-dark-secondary/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-teal to-primary-cyan mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-text-light/90 leading-relaxed">
              I'm a passionate <span className="text-primary-teal font-semibold">Full-Stack Developer</span> and{' '}
              <span className="text-primary-cyan font-semibold">Web3 Enthusiast</span> currently pursuing my Bachelor's
              in Computer Science at IIIT Dharwad. I specialize in building modern web applications with React, Node.js,
              and exploring the exciting world of blockchain technology, particularly Solana.
            </p>

            <p className="text-lg text-text-light/90 leading-relaxed">
              My journey in development focuses on creating scalable solutions, crafting exceptional user experiences,
              and solving complex problems. I'm always eager to learn new technologies and contribute to innovative
              projects that push the boundaries of what's possible.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 text-text-light/80">
                <FaGraduationCap className="text-primary-teal" />
                <span>B.Tech CSE (2023-2027)</span>
              </div>
              {/* <div className="flex items-center gap-2 text-text-light/80">
                <FaMapMarkerAlt className="text-primary-teal" />
                <span>Joga Yellapur, KA, India</span>
              </div> */}
            </div>
          </motion.div>

          {/* Right Column - Stats/Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: '3+', label: 'Featured Projects' },
              { number: '10+', label: 'Tech Stacks' },
              { number: '100%', label: 'Web3 Focus' },
              { number: '∞', label: 'Passion for Code' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)' }}
                className="bg-dark-base/50 p-6 rounded-lg border border-primary-teal/20 glow-effect"
              >
                <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-sm text-text-light/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              title: 'Problem Solver',
              description: 'I thrive on tackling complex challenges and finding elegant solutions.',
            },
            {
              title: 'Continuous Learner',
              description: 'Always exploring new technologies and staying updated with industry trends.',
            },
            {
              title: 'Team Player',
              description: 'Collaborative mindset with experience in hackathons and team projects.',
            },
          ].map((highlight, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-dark-base/30 p-6 rounded-lg border border-primary-cyan/20"
            >
              <h3 className="text-xl font-semibold text-primary-teal mb-2">{highlight.title}</h3>
              <p className="text-text-light/80">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

