import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <motion.section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-6xl font-bold mb-4">Swasthik Acharya</h1>
      <p className="text-2xl mb-6">QA Automation Engineer</p>
      <p className="mb-8 text-accent">Automation | API Testing | Performance Testing</p>
      <div className="space-x-4">
        <a href="#projects" className="btn-primary">
          View Projects
        </a>
        <a href="#contact" className="btn-secondary">
          Contact
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
