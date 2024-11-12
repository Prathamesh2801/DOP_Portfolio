import React, { useEffect, useState } from "react";
import "../styles/Typewriter.css"; // For cursor styling

const quotes = [
  "Crafting Light, Framing Stories",
  "The Art of Light and Shadow",
  "From Concept to Camera",
  "The Cinematic Palette",
  "Frames of Emotion",
];

const Typewriter = () => {
  const [currentQuote, setCurrentQuote] = useState("");
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const quote = quotes[quoteIndex];

    if (isTyping && charIndex < quote.length) {
      const typingTimeout = setTimeout(() => {
        setCurrentQuote((prev) => prev + quote[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(typingTimeout);
    } else if (isTyping && charIndex === quote.length) {
      setIsTyping(false);  // Pause after finishing typing
    } else {
      const pauseTimeout = setTimeout(() => {
        setIsTyping(true);
        setCurrentQuote("");
        setCharIndex(0);
        setQuoteIndex((prev) => (prev + 1) % quotes.length);
      }, 5000); // 5 seconds delay after the quote is displayed fully
      return () => clearTimeout(pauseTimeout);
    }
  }, [charIndex, isTyping, quoteIndex]);

  return (
    <h1 className="typewriter h-20 text-3xl font-semibold tracking-tight leading-none md:text-3xl xl:text-5xl dark:text-white">
      {currentQuote}
      <span className="cursor">|</span>
    </h1>
  );
};

export default Typewriter;
