import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  tech: string;
  github: string;
  live: string;
  category: string;
}

const projects: Project[] = [
  {
    title: 'Automation Framework',
    description: 'Java + Selenium + TestNG + POM',
    tech: 'Java, Selenium, TestNG',
    github: '#',
    live: '#',
    category: 'automation',
  },
  {
    title: 'Playwright API Testing Framework',
    description: 'Playwright + Typescript + BDD',
    tech: 'Playwright, TypeScript',
    github: '#',
    live: '#',
    category: 'automation',
  },
  {
    title: 'Mobile Automation',
    description: 'Appium + Android + iOS',
    tech: 'Appium, Android, iOS',
    github: '#',
    live: '#',
    category: 'automation',
  },
  {
    title: 'Load Testing',
    description: 'k6 + Grafana dashboards',
    tech: 'k6, Grafana',
    github: '#',
    live: '#',
    category: 'performance',
  },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <motion.section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-6">Projects</h2>
      <div className="mb-4 space-x-2">
        {['all', 'automation', 'performance'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border ${
              filter === cat ? 'bg-accent text-white' : 'border-white text-white'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {filtered.map((proj) => (
          <div
            key={proj.title}
            className="p-6 bg-gray-800 rounded-xl glassmorphism"
          >
            <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
            <p className="mb-2">{proj.description}</p>
            <p className="text-sm mb-4">Tech: {proj.tech}</p>
            <div className="flex space-x-4">
              <a href={proj.github} className="text-accent hover:underline">
                GitHub
              </a>
              <a href={proj.live} className="text-accent hover:underline">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
