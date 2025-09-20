import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between p-4 bg-[#0f111a] text-white shadow-md">
      {/* Logo / Name - CHANGE this to your name or logo */}
      <Link to="/" className="text-2xl font-mono font-bold">
        Busy Works
      </Link>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6 font-mono text-lg">
        {/* You can add/remove pages here */}
        <li>
          <Link to="/" className="hover:text-[#00ffae] transition-colors duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-[#00ffae] transition-colors duration-300">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-[#00ffae] transition-colors duration-300">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/network-topologies" className="hover:text-[#00ffae] transition-colors duration-300">
            Network Topologies
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-[#00ffae] transition-colors duration-300">
            Contact
          </Link>
        </li>
      </ul>

      {/* Dark Mode Toggle */}
      <DarkModeToggle />

      {/* Mobile Menu Button */}
      {/* Optional: Can implement hamburger menu here */}
    </nav>
  );
}
