// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NetworkTopologies from "./pages/NetworkTopologies";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

/**
 * App.jsx
 * - Root component of the app
 * - Handles routing between pages
 * - Includes a persistent Navbar
 */
export default function App() {
  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />

      {/* Define routes for each page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/network-topologies" element={<NetworkTopologies />} />
        <Route path="/contact" element={<Contact />} />
        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
