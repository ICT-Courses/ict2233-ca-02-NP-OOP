// src/components/Navbar.jsx
import { Link } from "react-router-dom";
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

      {/* Dark mode toggle */}
      <DarkModeToggle />
    </nav>
  );
}
