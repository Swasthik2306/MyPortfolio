import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Automation',
    items: [
      { name: 'Java', level: 80 },
      { name: 'Selenium', level: 85 },
      { name: 'Playwright', level: 70 },
      { name: 'Appium', level: 75 },
    ],
  },
  {
    title: 'Testing',
    items: [
      { name: 'API Testing', level: 90 },
      { name: 'BDD', level: 60 },
      { name: 'Cucumber', level: 60 },
    ],
  },
  {
    title: 'Performance',
    items: [
      { name: 'k6', level: 65 },
      { name: 'Grafana', level: 70 },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Jira', level: 85 },
      { name: 'Azure DevOps', level: 80 },
      { name: 'Git', level: 90 },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <motion.section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="p-6 bg-gray-800 rounded-xl glassmorphism"
          >
            <h3 className="text-xl font-semibold mb-3">
              {group.title}
            </h3>
            <ul className="space-y-3">
              {group.items.map((item) => (
                <li key={item.name}>
                  <div className="flex justify-between mb-1">
                    <span>{item.name}</span>
                    <span>{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded">
                    <motion.div
                      className="bg-accent h-2 rounded"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
