import Section from '@components/Section'
import Card from '@components/Card'
import { motion } from 'framer-motion'
import { Code, Zap, TrendingUp, Users } from 'lucide-react'

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Automation Testing',
      description: '2+ years building robust automation frameworks with Selenium, Playwright, and Appium',
    },
    {
      icon: Zap,
      title: 'API Testing',
      description: 'Expert in RESTful API testing using Postman with comprehensive test scenarios',
    },
    {
      icon: TrendingUp,
      title: 'Performance Testing',
      description: 'Load and stress testing using k6 and Grafana for optimal application performance',
    },
    {
      icon: Users,
      title: 'CI/CD Integration',
      description: 'Seamless integration with Azure DevOps and Git for continuous quality assurance',
    },
  ]

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Building Quality Through Automation"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <p className="text-lg text-gray-300">
              I'm a passionate QA Automation Engineer with expertise in designing and implementing
              comprehensive test automation frameworks. With over 2 years of professional experience,
              I've successfully worked on diverse projects involving web automation, mobile testing,
              and API testing.
            </p>
            <p className="text-lg text-gray-300">
              My journey in QA has equipped me with strong technical skills in multiple tools and
              frameworks. I'm dedicated to ensuring product quality while optimizing testing
              efficiency through automation and best practices.
            </p>
            <p className="text-lg text-gray-300">
              Beyond coding, I'm passionate about continuous learning, staying updated with latest
              testing trends, and mentoring junior QA engineers in the team.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-xl mb-4">Technical Categories</h4>
            <div className="space-y-2">
              <p className="text-gray-300"><strong className="text-blue-400">Automation:</strong> Java, Selenium, Playwright, Appium</p>
              <p className="text-gray-300"><strong className="text-purple-400">API Testing:</strong> Postman, REST APIs, BDD, Cucumber</p>
              <p className="text-gray-300"><strong className="text-pink-400">Performance:</strong> k6, Grafana, Load Testing</p>
            </div>
          </div>
        </motion.div>

        {/* Stats/Highlights */}
        <div className="grid grid-cols-2 gap-4">
          {highlights.map((highlight, index) => (
            <Card key={index} delay={index * 0.1} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                  <highlight.icon size={32} className="text-white" />
                </div>
              </div>
              <h4 className="font-semibold mb-2">{highlight.title}</h4>
              <p className="text-sm text-gray-400">{highlight.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4 md:gap-8">
        {[
          { label: 'Years Experience', value: '2+' },
          { label: 'Projects Completed', value: '15+' },
          { label: 'Automation Tests', value: '1000+' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-morphism p-6 rounded-xl text-center"
          >
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
            <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

