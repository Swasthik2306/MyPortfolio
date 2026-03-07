import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  category: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Test Automation Framework',
    description: 'Implemented BDD framework with Playwright and Selenium. Reduced regression cycles by 20%.',
    tech: ['Java', 'Selenium', 'TestNG', 'POM'],
    github: '#',
    live: '#',
    category: 'automation',
    highlights: ['Reduced regression by 20%', 'POM Pattern', 'CI/CD Ready'],
  },
  {
    id: '2',
    title: 'Playwright API Testing Framework',
    description: 'Built comprehensive API testing suite with Playwright and TypeScript using BDD.',
    tech: ['Playwright', 'TypeScript', 'BDD', 'Cucumber'],
    github: '#',
    live: '#',
    category: 'automation',
    highlights: ['Playwright Integration', 'BDD Framework', 'API Validation'],
  },
  {
    id: '3',
    title: 'Mobile Automation Suite',
    description: 'Automated test scripts for iOS and Android with 95% pass rate using Appium.',
    tech: ['Appium', 'Android', 'iOS', 'JavaScript'],
    github: '#',
    live: '#',
    category: 'automation',
    highlights: ['120+ Test Scripts', '95% Pass Rate', 'Cross-Platform'],
  },
  {
    id: '4',
    title: 'Load Testing Dashboard',
    description: 'Executed load testing for 1,000 concurrent users. Strengthened peak load stability using K6 and Grafana.',
    tech: ['k6', 'Grafana', 'AWS', 'JavaScript'],
    github: '#',
    live: '#',
    category: 'performance',
    highlights: ['1000+ Users', 'Real-time Monitoring', 'AWS Integration'],
  },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <motion.section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl w-full">
        <motion.h2 className="section-title text-center mb-4">Project Highlights</motion.h2>
        <p className="section-subtitle text-center mb-12">Work & Achievements</p>

        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {['all', 'automation', 'performance'].map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filter === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((proj, idx) => (
            <motion.div
              key={proj.id}
              className="card card-hover group overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-blue-300 mb-2 group-hover:text-blue-200 transition">
                  {proj.title}
                </h3>
                <p className="text-slate-300 mb-3">{proj.description}</p>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {proj.highlights.map((h) => (
                    <span key={h} className="text-xs px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-slate-400 mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-slate-700/50 text-slate-300 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-slate-700/50">
                <a href={proj.github} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition">
                  <Github size={18} /> GitHub
                </a>
                <a href={proj.live} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition">
                  <ExternalLink size={18} /> Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
