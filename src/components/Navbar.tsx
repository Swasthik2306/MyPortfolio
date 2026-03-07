import React from 'react';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between">
        <div className="text-white font-bold text-xl">My Portfolio</div>
        <div className="space-x-6">
          {['hero', 'about', 'skills', 'projects', 'experience', 'blog', 'contact'].map((sec) => (
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
    </nav>
  );
};

export default Navbar;
