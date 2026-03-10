import Section from '@components/Section'
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } catch {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'swasthik@example.com',
      href: 'mailto:swasthik@example.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '@swasthik-acharya',
      href: 'https://linkedin.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@swasthik-acharya',
      href: 'https://github.com',
    },
  ]

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Let's Connect and Discuss Your QA Automation Needs"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm always interested in hearing about new projects and exciting opportunities in QA
              automation. Whether you have a question or just want to say hello, feel free to get
              in touch!
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-morphism p-4 rounded-lg flex items-center gap-4 hover:bg-white/10 transition-all group"
              >
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-500 rounded-lg group-hover:scale-110 transition-transform">
                  <method.icon size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{method.label}</p>
                  <p className="font-semibold">{method.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Resume Download */}
          <motion.a
            href="#"
            download
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 btn-secondary w-full justify-center"
          >
            <Download size={18} />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-morphism p-8 rounded-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-800/50 border border-white/20 rounded-lg focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600/50 transition-all"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-800/50 border border-white/20 rounded-lg focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600/50 transition-all"
                placeholder="john@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-dark-800/50 border border-white/20 rounded-lg focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600/50 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-sm"
              >
                Thanks for your message! I'll get back to you soon.
              </motion.div>
            )}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm"
              >
                Something went wrong. Please try again.
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  )
}
