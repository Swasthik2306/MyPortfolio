import React from 'react';
import { motion } from 'framer-motion';

const articles = [
  'Appium Automation Guide',
  'Playwright API Testing',
  'Selenium Interview Questions',
];

const Blog: React.FC = () => {
  return (
    <motion.section
      id="blog"
      className="min-h-screen flex flex-col items-center justify-center px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-6">Blog</h2>
      <ul className="space-y-4">
        {articles.map((a) => (
          <li key={a} className="text-accent hover:underline cursor-pointer">
            {a}
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Blog;
