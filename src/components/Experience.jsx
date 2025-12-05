import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaTrophy, FaGraduationCap, FaBook } from 'react-icons/fa';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const achievements = [
    {
      title: 'IIT Dharwad Hackathon Winner',
      description: 'Developed an innovative Roommate Finder web application that won the hackathon.',
      icon: <FaTrophy className="w-6 h-6" />,
      date: '2024',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const education = {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Indian Institute of Information Technology, Dharwad',
    period: '2023-2027',
    admissionNo: '23BCS132',
    coursework: [
      'Data Structures',
      'Object-Oriented Programming',
      'Algorithms',
      'Operating Systems',
      'Database Management Systems',
      'Software Development',
    ],
  };

  return (
    <section id="experience" ref={ref} className="section-padding bg-dark-base">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono mb-4">
            <span className="text-gradient">Experience & Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-teal to-primary-cyan mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold font-mono text-primary-teal mb-8 flex items-center gap-3">
              <FaTrophy className="w-6 h-6" />
              Achievements
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)' }}
                  className="bg-dark-secondary/50 p-6 rounded-lg border border-primary-teal/20 glow-effect"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${achievement.color} flex items-center justify-center text-white mb-4`}>
                    {achievement.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-text-light mb-2">{achievement.title}</h4>
                  <p className="text-text-light/80 mb-2">{achievement.description}</p>
                  <span className="text-sm text-primary-cyan">{achievement.date}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold font-mono text-primary-teal mb-8 flex items-center gap-3">
              <FaGraduationCap className="w-6 h-6" />
              Education
            </h3>
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)' }}
              className="bg-dark-secondary/50 p-6 rounded-lg border border-primary-teal/20 glow-effect"
            >
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-text-light mb-2">{education.degree}</h4>
                <p className="text-primary-cyan font-medium mb-1">{education.institution}</p>
                <p className="text-text-light/70 text-sm mb-2">{education.period}</p>
                <p className="text-text-light/60 text-xs">Admission No: {education.admissionNo}</p>
              </div>

              <div>
                <h5 className="text-sm font-semibold text-primary-teal mb-3 flex items-center gap-2">
                  <FaBook className="w-4 h-4" />
                  Relevant Coursework
                </h5>
                <div className="grid grid-cols-2 gap-2">
                  {education.coursework.map((course, index) => (
                    <div
                      key={index}
                      className="px-3 py-2 bg-dark-base/50 rounded text-sm text-text-light/80 border border-primary-cyan/10"
                    >
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

