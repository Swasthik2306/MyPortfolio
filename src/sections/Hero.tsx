import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="text-center max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="text-6xl md:text-7xl font-bold mb-4">
          Swasthik Acharya
        </motion.h1>

        <motion.p variants={itemVariants} className="text-2xl md:text-3xl text-blue-400 mb-2 font-semibold">
          Software Engineer in Test | QA Automation Engineer
        </motion.p>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-300 mb-8">
          Automation | API Testing | Performance Testing | Mangalore, KA
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <a href="#projects" className="btn-primary flex items-center justify-center gap-2">
            View Projects <ArrowRight size={20} />
          </a>
          <a href="#contact" className="btn-secondary flex items-center justify-center gap-2">
            Contact Me
          </a>
        </motion.div>

        <motion.p variants={itemVariants} className="text-slate-400 text-sm">
          ↓ Scroll to explore my work
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default Hero;

