import { RiCloseLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const resume ="https://drive.google.com/file/d/17yR1OHF2Gyi3un94ulBDtKdCCm3A4ASS/view?usp=sharing"
    

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-800 bg-opacity-90 text-white px-10 py-4 md:px-20 z-50 flex justify-between items-center shadow-md">
      {/* Logo */}
      <a href="#">
        <span className="text-2xl cursor-pointer font-semibold tracking-wide">
          Rakesh Ganiger
        </span>
      </a>

      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center gap-6">
        <a href="#About" className="text-xl hover:text-gray-300 transition-all">
          About
        </a>
        <a
          href="#Skills"
          className="text-xl hover:text-gray-300 transition-all"
        >
          Skills
        </a>
        <a
          href="#Projects"
          className="text-xl hover:text-gray-300 transition-all"
        >
          Projects
        </a>
        <a
          href="#ContactForm"
          className="text-xl hover:text-gray-300 transition-all"
        >
          Contact
        </a>

        {/* Resume Button */}
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <button className="ml-6 py-2 px-6 text-lg font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-blue-700 transition duration-300">
            Resume
          </button>
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden z-50">
        {menuOpen ? (
          <RiCloseLine
            size={30}
            className="cursor-pointer transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <FaBars
            size={30}
            className="cursor-pointer transition-all duration-300"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className="text-center space-y-6 text-2xl">
          <li>
            <a href="#About" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#Skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#Projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#ContactForm" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
          <li>
            <a href={resume} target="_blank" rel="noopener noreferrer">
              <button className="py-2 px-6 text-lg font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-blue-700 transition duration-300">
                Resume
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
