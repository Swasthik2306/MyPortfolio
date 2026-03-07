import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'Selenium',
  'Playwright',
  'Appium',
  'Postman',
  'k6',
  'Grafana',
  'Azure DevOps',
  'Android',
  'iOS',
];

const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="max-w-2xl mb-8 text-center">
        I have over 2 years of experience as a QA professional specializing in
        automation, API testing, performance testing, and CI/CD with mobile
        testing expertise on Android and iOS.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((s) => (
          <span
            key={s}
            className="px-4 py-2 bg-gray-800 rounded-full text-sm"
          >
            {s}
          </span>
        ))}
      </div>
    </motion.section>
  );
};

export default About;
