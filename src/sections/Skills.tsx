import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Languages & Frameworks',
    items: [
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'Gherkin/BDD', level: 90 },
    ],
  },
  {
    title: 'Test Automation',
    items: [
      { name: 'Selenium', level: 95 },
      { name: 'Playwright', level: 90 },
      { name: 'Appium', level: 85 },
      { name: 'Page Object Model', level: 92 },
    ],
  },
  {
    title: 'Performance & Monitoring',
    items: [
      { name: 'Grafana K6', level: 80 },
      { name: 'AWS CloudWatch', level: 75 },
      { name: 'LambdaTest', level: 70 },
      { name: 'Load Testing', level: 85 },
    ],
  },
  {
    title: 'DevOps & Tools',
    items: [
      { name: 'Azure DevOps', level: 88 },
      { name: 'CI/CD Pipelines', level: 85 },
      { name: 'Git', level: 92 },
      { name: 'Agile/Scrum', level: 88 },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <motion.section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl w-full">
        <motion.h2 className="section-title text-center mb-12">Technical Skills</motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              className="card"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold text-blue-300 mb-6">{group.title}</h3>
              <div className="space-y-5">
                {group.items.map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-200">{item.name}</span>
                      <span className="text-sm text-blue-400 font-semibold">{item.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;

