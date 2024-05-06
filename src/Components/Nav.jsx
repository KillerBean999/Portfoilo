import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Portfolio from "../Img/portfolio.png";

export default function Nav() {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const { top } = heroSection.getBoundingClientRect();
        setShowNav(top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={showNav ? "hide" : "show"}>
      <div className="container">
        <img className="logo" src={Portfolio} alt="Portfolio" />
        <div className="menu">
          <Link to="#home" className="link">
            Home
          </Link>
          <Link to="#bio" className="link">
            About
          </Link>
          <Link to="#projects" className="link">
            Projects
          </Link>
          <Link to="#contact" className="link">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
