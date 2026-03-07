import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <motion.section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-6">Contact</h2>
      <div className="space-y-4 text-center">
        <a href="mailto:example@example.com" className="text-accent hover:underline">
          Email
        </a>
        <a href="https://linkedin.com" target="_blank" className="text-accent hover:underline">
          LinkedIn
        </a>
        <a href="https://github.com" target="_blank" className="text-accent hover:underline">
          GitHub
        </a>
        <a href="/resume.pdf" download className="btn-secondary mt-4">
          Download Resume
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;
