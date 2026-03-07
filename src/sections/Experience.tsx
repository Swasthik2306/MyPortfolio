import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <motion.section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-6">Experience</h2>
      <div className="relative border-l border-gray-600 pl-8">
        <div className="mb-10">
          <span className="absolute -left-4 top-0 w-8 h-8 bg-accent rounded-full"></span>
          <h3 className="text-2xl font-semibold">QA Analyst</h3>
          <p className="text-sm text-gray-300">
            Responsibilities: Automation testing, API testing, Mobile testing, Load testing
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
