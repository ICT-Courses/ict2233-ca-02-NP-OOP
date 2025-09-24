// src/components/Navbar.jsx
/*import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="bg-[#1a1c2c] dark:bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="flex gap-6 font-semibold text-lg">
        <Link to="/" className="hover:text-blue-400 transition">Home</Link>
        <Link to="/about" className="hover:text-blue-400 transition">About</Link>
        <Link to="/projects" className="hover:text-blue-400 transition">Projects</Link>
        <Link to="/network-topologies" className="hover:text-blue-400 transition">Network Topologies</Link>
        <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
      </div>

      //{/* Dark mode toggle *///}
      //<DarkModeToggle />
    //</nav>
  //);
//}

import { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-[#0f111a] text-gray-900 dark:text-white shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold">
            Network Security
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-blue-500 dark:hover:text-blue-400">Home</Link>
            <Link to="/about" className="hover:text-blue-500 dark:hover:text-blue-400">About</Link>
            <Link to="/projects" className="hover:text-blue-500 dark:hover:text-blue-400">Projects</Link>
            <Link to="/contact" className="hover:text-blue-500 dark:hover:text-blue-400">Contact</Link>
            <DarkModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2 bg-white dark:bg-[#0f111a] text-gray-900 dark:text-white transition-colors duration-300">
          <Link to="/" className="block hover:text-blue-500 dark:hover:text-blue-400">Home</Link>
          <Link to="/about" className="block hover:text-blue-500 dark:hover:text-blue-400">About</Link>
          <Link to="/projects" className="block hover:text-blue-500 dark:hover:text-blue-400">Projects</Link>
          <Link to="/contact" className="block hover:text-blue-500 dark:hover:text-blue-400">Contact</Link>
          <DarkModeToggle />
        </div>
      )}
    </nav>
  );
}
