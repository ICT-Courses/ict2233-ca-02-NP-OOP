import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  // State to track dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Load user's preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved) setDarkMode(JSON.parse(saved));
  }, []);

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      // Toggle Tailwind dark class on body
      if (newMode) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
      return newMode;
    });
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="ml-4 px-3 py-1 rounded bg-[#00d1ff] text-[#0f111a] font-mono hover:bg-[#00ffae] transition-colors duration-300"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
