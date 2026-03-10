import Section from '@components/Section'
import Card from '@components/Card'
import { Github, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      title: 'Automation Framework',
      description: 'Comprehensive test automation framework with POM architecture and advanced reporting',
      tech: ['Java', 'Selenium', 'TestNG', 'POM'],
      github: '#',
      demo: '#',
      image: '1_Swasthik-Acharya.png',
    },
    {
      title: 'Playwright API Testing',
      description: 'End-to-end API and UI testing framework using Playwright with BDD approach',
      tech: ['Playwright', 'TypeScript', 'Cucumber', 'API Testing'],
      github: '#',
      demo: '#',
      image: '2_Professional-Summary.png',
    },
    {
      title: 'Mobile Automation Suite',
      description: 'Cross-platform mobile testing suite for iOS and Android applications using Appium',
      tech: ['Appium', 'Android', 'iOS', 'Java'],
      github: '#',
      demo: '#',
      image: '3_Technical-Skills.png',
    },
    {
      title: 'Load Testing Dashboard',
      description: 'Performance testing and monitoring dashboard using k6 and Grafana',
      tech: ['k6', 'Grafana', 'Load Testing', 'Monitoring'],
      github: '#',
      demo: '#',
      image: '4_Education-and-Career-Journey.png',
    },
    {
      title: 'REST API Testing Suite',
      description: 'Automated REST API testing with comprehensive validations and data-driven tests',
      tech: ['REST APIs', 'Postman', 'JavaScript', 'BDD'],
      github: '#',
      demo: '#',
      image: '5_Current-Role-Highlights.png',
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Automated test execution pipeline integrated with Azure DevOps',
      tech: ['Azure DevOps', 'Jenkins', 'Git', 'Automation'],
      github: '#',
      demo: '#',
      image: '6_Key-Achievements.png',
    },
  ]

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Showcasing My Best Work in QA Automation"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} delay={index * 0.1} className="flex flex-col h-full overflow-hidden group">
            {/* Project Image Placeholder */}
            <div className="w-full h-40 bg-gradient-to-br from-blue-600/20 to-purple-500/20 rounded-lg mb-4 overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full h-full bg-gradient-to-br from-blue-600/40 via-purple-500/30 to-pink-500/20 flex items-center justify-center"
              >
                <span className="text-gray-400 font-semibold">{project.title}</span>
              </motion.div>
            </div>

            {/* Project Content */}
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>

            {/* Tech Stack */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-blue-600/10 text-blue-600 border border-blue-600/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-3 pt-4 border-t border-white/10">
              <a
                href={project.github}
                className="flex-1 flex items-center justify-center gap-2 py-2 bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors"
              >
                <Github size={18} />
                <span className="text-sm">Code</span>
              </a>
              <a
                href={project.demo}
                className="flex-1 flex items-center justify-center gap-2 py-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg transition-colors text-blue-600"
              >
                <ExternalLink size={18} />
                <span className="text-sm">Demo</span>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
