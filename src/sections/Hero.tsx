import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import { Link as ScrollLink } from 'react-scroll'

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:swasthik@example.com', label: 'Email' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants}>
            <p className="text-blue-400 font-semibold text-lg">Hello, I'm</p>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            <span className="text-gradient">Swasthik Acharya</span>
          </motion.h1>

          {/* Role */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h2 className="text-3xl md:text-4xl text-gray-300">QA Automation Engineer</h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
              Specializing in{' '}
              <span className="text-blue-400 font-semibold">Automation</span> |{' '}
              <span className="text-purple-400 font-semibold">API Testing</span> |{' '}
              <span className="text-pink-400 font-semibold">Performance Testing</span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-gray-300 max-w-xl mx-auto text-lg">
            2+ years of experience building robust automation frameworks, ensuring seamless API
            testing, and optimizing application performance. Let's collaborate to deliver quality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              onClick={() => setActiveSection('projects')}
              className="btn-primary cursor-pointer"
            >
              View Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setActiveSection('contact')}
              className="btn-secondary cursor-pointer"
            >
              Get in Touch
            </ScrollLink>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-6 justify-center pt-6"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-morphism rounded-full hover:bg-white/10 transition-all transform hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={24} className="text-blue-400" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-blue-400" />
        </motion.div>
      </div>
    </section>
  )
}

