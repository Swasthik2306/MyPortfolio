import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const categories = [
    { title: 'Test Automation Expert', desc: 'Specialized in BDD frameworks and CI/CD integration. Skilled in Playwright, Selenium, and Appium.' },
    { title: 'Performance Testing', desc: 'Proficient with Grafana K6 and AWS CloudWatch. Build scalable automation frameworks.' },
    { title: 'Team Leadership', desc: 'Strong collaborator with proven mentoring experience. Agile methodologies and cross-functional delivery.' },
  ];

  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl w-full">
        <motion.h2 className="section-title text-center mb-4">Professional Summary</motion.h2>
        <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
          I bring 2+ years of experience as a QA professional specializing in automation, API testing, performance testing, and CI/CD with mobile testing expertise on Android and iOS.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              className="card card-hover"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <h3 className="text-xl font-semibold text-blue-300">{cat.title}</h3>
              </div>
              <p className="text-slate-300">{cat.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: '2+', value: 'Years Experience' },
            { label: '5+', value: 'Tools Mastered' },
            { label: '120+', value: 'Test Scripts' },
            { label: '95%', value: 'Pass Rate' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="card text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-blue-400 mb-1">{stat.label}</div>
              <p className="text-sm text-slate-400">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;

