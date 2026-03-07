import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Blog from '../sections/Blog';
import Contact from '../sections/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
      </main>
    </>
  );
};

export default HomePage;
