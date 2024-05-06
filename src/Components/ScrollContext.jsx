// ScrollContext.js
import React, { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export const useScroll = () => useContext(ScrollContext);

export default function ScrollProvider({ children }) {
  const heroRef = useRef(null);
  const bioRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollContext.Provider
      value={{ scrollToRef, heroRef, bioRef, projectsRef, contactRef }}
    >
      {children}
    </ScrollContext.Provider>
  );
}
