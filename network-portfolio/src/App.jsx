/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  /*return (
    <>
      Hello World
    </>
  )*/

    //return <div className="text-[50px]">Hello World</div>
//}

//export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NetworkTopologies from "./pages/NetworkTopologies";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      {/* Navbar component with links and Dark Mode toggle*/}
      <Navbar />

      {/* Page routing using React Router */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page with hero section + network canvas */}
        <Route path="/about" element={<About />} /> {/* About page: background + skills */}
        <Route path="/projects" element={<Projects />} /> {/* Projects page: cards with previews */}
        <Route path="/network-topologies" element={<NetworkTopologies />} /> {/* Bonus interactive page */}
        <Route path="/contact" element={<Contact />} /> {/* Contact page: form + validation */}
        <Route path="*" element={<NotFound />} /> {/* 404 Page */}
      </Routes>
    </Router>
  );
}

