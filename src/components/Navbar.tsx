import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'blog', 'contact'];

  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-white font-bold text-xl">My Portfolio</div>
        <button
          className="md:hidden text-white"
          onClick={() => setOpen((o) => !o)}
        >
          <Menu />
        </button>
        <div className={`hidden md:flex space-x-6`}>\
          {sections.map((sec) => (
            <Link
              key={sec}
              to={sec}
              smooth={true}
              duration={500}
              className="text-white cursor-pointer hover:text-accent"
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </Link>
          ))}
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-gray-900/90 px-4 py-2">
          {sections.map((sec) => (
            <Link
              key={sec}
              to={sec}
              smooth={true}
              duration={500}
              className="block text-white py-2"
              onClick={() => setOpen(false)}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
