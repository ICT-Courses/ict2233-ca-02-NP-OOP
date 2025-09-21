import { useState, useEffect } from "react";

/**
 * Custom hook for typing effect.
 * @param {string} text - Full text to type
 * @param {number} speed - Typing speed in ms per character
 * @returns {string} displayedText - Text currently typed
 */
export default function useTypingEffect(text, speed = 100) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayedText;
}
