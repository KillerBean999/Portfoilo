import React, { useEffect } from "react";
import HomeVid from "../Img/space-clip.mp4";
import CV from "../Img/curriculum-vitae.png";

import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="home">
      <video autoPlay loop muted src={HomeVid} />
      <div className="content">
        <h3 className="h3">
          Hello, I'm
          <strong> Erik Bada</strong>
          .
          <br />
          Full-Stack Web Developer
        </h3>
        <a href="">
          <img src={CV} alt="CV" className="cv" />
        </a>
      </div>
    </div>
  );
}
