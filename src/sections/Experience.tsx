import Section from '@components/Section'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: 'QA Automation Engineer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Leading QA automation initiatives and test suite development',
      responsibilities: [
        'Designed and developed comprehensive test automation frameworks',
        'Implemented API testing strategies with Postman and Rest Assured',
        'Conducted performance testing using k6 and Grafana',
        'Mentored junior QA engineers on automation best practices',
        'Integrated automated tests into CI/CD pipeline using Azure DevOps',
      ],
    },
    {
      title: 'QA Analyst',
      company: 'Software Solutions Inc',
      period: '2021 - 2022',
      description: 'Test automation and quality assurance responsibilities',
      responsibilities: [
        'Created Selenium automation scripts for web applications',
        'Performed mobile testing on Android and iOS platforms',
        'Documented test cases and maintained test documentation',
        'Collaborated with development team on bug fixes and improvements',
        'Participated in test planning and strategy meetings',
      ],
    },
    {
      title: 'QA Trainee',
      company: 'Learning Labs',
      period: '2021 - 2021',
      description: 'Initial training and learning phase in QA testing',
      responsibilities: [
        'Learned manual and automated testing concepts',
        'Practiced with Selenium and other automation tools',
        'Gained hands-on experience with different testing types',
        'Completed QA certification programs',
        'Contributed to multiple test projects',
      ],
    },
  ]

  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="My Professional Journey in QA"
    >
      <div className="relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 via-purple-500 to-pink-500" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`md:grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 0 ? 'md:grid-flow-dense' : ''
              }`}
            >
              {/* Left side - for even indices */}
              {index % 2 === 0 ? (
                <>
                  <div className="md:text-right">
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-dark-900" />
                </>
              ) : (
                <>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-dark-900" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </>
              )}

              {/* Responsibilities */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-morphism p-6 rounded-xl"
              >
                <h4 className="font-semibold mb-4 text-purple-500">Key Responsibilities</h4>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{resp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

