import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    title: 'Appium Automation Guide',
    excerpt: 'Complete guide to mobile automation using Appium for Android and iOS.',
    date: 'Coming Soon',
  },
  {
    title: 'Playwright API Testing',
    excerpt: 'Building robust API test suites with Playwright and BDD frameworks.',
    date: 'Coming Soon',
  },
  {
    title: 'Selenium Interview Questions',
    excerpt: 'Top interview questions and answers for Selenium automation testing.',
    date: 'Coming Soon',
  },
];

const Blog: React.FC = () => {
  return (
    <motion.section
      id="blog"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl w-full">
        <motion.h2 className="section-title text-center mb-4">Blog & Articles</motion.h2>
        <p className="section-subtitle text-center mb-12">Insights & Knowledge Sharing</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              className="card card-hover group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold text-blue-300 mb-3 group-hover:text-blue-200 transition">
                {article.title}
              </h3>
              <p className="text-slate-300 mb-4">{article.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">{article.date}</span>
                <ArrowRight className="text-blue-400 group-hover:translate-x-2 transition" size={20} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-slate-400 mb-4">More articles coming soon...</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Blog;

