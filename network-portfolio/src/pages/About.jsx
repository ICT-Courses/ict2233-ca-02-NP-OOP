// src/pages/About.jsx

/**
 * About.jsx
 * - Displays information about the portfolio owner
 * - Placeholder for now, will later include CLI-style typing effect
 */

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f111a] text-white px-6">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg max-w-2xl text-center">
        Hi, I’m Busy Works 👋  
        An aspiring <span className="text-cyan-400">Network Security Engineer</span> currently pursuing my 
        BSc. Hons in IT and certifications like CCNA, JNCIA, and Fortinet.  
        <br />
        This page will later showcase my journey with a CLI-style typing animation.
      </p>
    </div>
  );
}

