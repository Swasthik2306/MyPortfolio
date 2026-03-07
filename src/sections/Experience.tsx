import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const experiences = [
  {
    role: 'Software Engineer in Test II',
    company: '7EDGE Private Ltd',
    period: 'May 2025 – Present',
    description: 'Leading test automation initiatives and mentoring junior engineers.',
    highlights: ['Automation Leadership', 'Team Mentoring', 'Framework Development'],
  },
  {
    role: 'Software Engineer in Test I',
    company: '7EDGE Private Ltd',
    period: 'Feb 2024 – May 2025',
    description: 'Delivered mobile automation POC and streamlined QA processes.',
    highlights: ['Mobile Automation', 'Process Improvement', 'POC Development'],
  },
];

const Experience: React.FC = () => {
  return (
    <motion.section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-3xl w-full">
        <motion.h2 className="section-title text-center mb-4">Career Journey</motion.h2>
        <p className="section-subtitle text-center mb-12">Experience & Growth</p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-400"></div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                className="pl-24 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center border-4 border-slate-900">
                  <Code2 className="text-white" size={24} />
                </div>

                <div className="card card-hover">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-300">{exp.role}</h3>
                      <p className="text-slate-300">{exp.company}</p>
                    </div>
                    <span className="text-sm text-slate-400 bg-slate-700/50 px-3 py-1 rounded">{exp.period}</span>
                  </div>
                  <p className="text-slate-300 mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h) => (
                      <span key={h} className="text-xs px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;

