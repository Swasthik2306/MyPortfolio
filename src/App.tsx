import { useState } from 'react'
import Hero from '@sections/Hero'
import Navbar from '@components/Navbar'
import About from '@sections/About'
import Skills from '@sections/Skills'
import Projects from '@sections/Projects'
import Experience from '@sections/Experience'
import Blog from '@sections/Blog'
import Contact from '@sections/Contact'
import Footer from '@components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-slate-900 overflow-hidden">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero setActiveSection={setActiveSection} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
