import Section from '@components/Section'
import Card from '@components/Card'
import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Automation Tools',
      skills: ['Selenium WebDriver', 'Playwright', 'Appium', 'TestNG', 'Cucumber BDD'],
      color: 'from-blue-500',
    },
    {
      title: 'Programming Languages',
      skills: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL'],
      color: 'from-purple-500',
    },
    {
      title: 'API Testing',
      skills: ['Postman', 'Rest Assured', 'GraphQL', 'API Automation', 'Mock Servers'],
      color: 'from-pink-500',
    },
    {
      title: 'Performance Testing',
      skills: ['k6', 'Grafana', 'Load Testing', 'Stress Testing', 'JMeter'],
      color: 'from-blue-500',
    },
    {
      title: 'Mobile Testing',
      skills: ['Android Testing', 'iOS Testing', 'Mobile Emulators', 'Device Testing', 'Cross-platform'],
      color: 'from-green-500',
    },
    {
      title: 'DevOps & Tools',
      skills: ['Azure DevOps', 'Git', 'Jenkins', 'Docker', 'Jira', 'CI/CD'],
      color: 'from-purple-500',
    },
  ]

  return (
    <Section
      id="skills"
      title="Technical Skills"
      subtitle="Tools and Technologies I Master"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} delay={index * 0.1}>
            <div className={`w-full h-1 bg-gradient-to-r ${category.color} to-transparent rounded-full mb-4`} />
            <h3 className="text-xl font-bold mb-4">{category.title}</h3>
            <div className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <div className={`w-2 h-2 bg-gradient-to-r ${category.color} to-transparent rounded-full`} />
                  <span className="text-gray-300">{skill}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Skill Proficiency */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {[
          { name: 'Test Automation', level: 95 },
          { name: 'API Testing', level: 90 },
          { name: 'Performance Testing', level: 85 },
          { name: 'Mobile Testing', level: 88 },
        ].map((skill, index) => (
          <div key={index} className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold">{skill.name}</span>
              <span className="text-blue-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </Section>
  )
}

