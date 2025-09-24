/*import { useState, useEffect } from "react";

/**
 * Custom hook for typing effect.
 * @param {string} text - Full text to type
 * @param {number} speed - Typing speed in ms per character
 * @returns {string} displayedText - Text currently typed
 */
/*export default function useTypingEffect(text, speed = 100) {
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
}*/

// src/hooks/useTypingEffect.jsx
/*import { useState, useEffect } from "react";

export default function useTypingEffect(text, speed = 50) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    // Blink cursor
    const cursorInterval = setInterval(() => {
      setCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return displayedText + (cursor ? "|" : "");
}*/

// src/hooks/useTypingEffect.jsx
import { useState, useEffect } from "react";

export default function useTypingEffect(text, speed = 50) {
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


