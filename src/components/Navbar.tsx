import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link as ScrollLink } from 'react-scroll'
import { motion } from 'framer-motion'

interface NavbarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ['home', 'about', 'skills', 'projects', 'experience', 'blog', 'contact']

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-white/10"
    >
      <div className="section-container flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-gradient"
        >
          SA
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <ScrollLink
              key={item}
              to={item}
              smooth={true}
              duration={500}
              onClick={() => setActiveSection(item)}
              className={`capitalize cursor-pointer transition-all ${
                activeSection === item
                  ? 'text-blue-400 font-semibold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item}
            </ScrollLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-blue-400 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-white/10"
        >
          <div className="section-container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <ScrollLink
                key={item}
                to={item}
                smooth={true}
                duration={500}
                onClick={() => {
                  setActiveSection(item)
                  setIsOpen(false)
                }}
                className={`capitalize cursor-pointer transition-all ${
                  activeSection === item
                    ? 'text-blue-400 font-semibold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item}
              </ScrollLink>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
