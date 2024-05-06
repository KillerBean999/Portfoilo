import React from "react";
import Facebook from "../Img/facebook (1).png";
import Github from "../Img/github.png";
import Linkedin from "../Img/linkedin.png";

export default function Footer() {
  return (
    <div className="web-link">
      <a href="https://www.facebook.com/profile.php?id=100009423108282">
        <img className="icon" src={Facebook} alt="Facebook" />
      </a>
      <a href="https://github.com/KillerBean999">
        <img className="icon" src={Github} alt="Github" />
      </a>
      <a href="https://www.linkedin.com/in/eric-bada-135902266/">
        <img className="icon" src={Linkedin} alt="LinkedIn" />
      </a>
    </div>
  );
}
