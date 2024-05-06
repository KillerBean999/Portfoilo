import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Brain from "../Img/icons8-brain-64.png";
import Thunder from "../Img/icons8-thunder-50.png";
import Responsive from "../Img/icons8-responsive-50.png";

export default function Bio() {
  const [chooceBio, setChooceBio] = useState("skills");

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="bio" className="bio">
      <div className="about-container">
        <h2>About</h2>
        <div className="about">
          <div
            className="responsive"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={Responsive} alt="" />
            <h3>Responsive</h3>
            <p>My layouts will work on any device, big or small.</p>
          </div>
          <div
            className="brain"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={Brain} alt="" />
            <h3>Adapting</h3>
            <p>Love learning new and more efficient ways to optimize.</p>
          </div>
          <div
            className="thunder"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={Thunder} alt="" />
            <h3>Fast</h3>
            <p>
              Fast load times and lag free interaction, my highest priority.
            </p>
          </div>
        </div>
      </div>
      <a
        className={`button ${chooceBio === "skills" ? "active" : ""}`}
        onClick={() => {
          setChooceBio("skills");
        }}
      >
        Skills
      </a>
      <a
        className={`button ${chooceBio === "education" ? "active" : ""}`}
        onClick={() => {
          setChooceBio("education");
        }}
      >
        Education
      </a>
      <div className={`content ${chooceBio}`}>
        {chooceBio === "skills" && (
          <div className="skills">
            <p className="html">HTML CSS</p>
            <p className="scss">SCSS</p>
            <p className="js">JavaScript</p>
            <p className="jsx">JSX</p>
            <p className="react">React</p>
            <p className="java">Java</p>
            <p className="api">RESTful API</p>
            <p className="sql">MySQL</p>
          </div>
        )}
        {chooceBio === "education" && (
          <div className="education">
            <div className="container">
              <p>Ort Melton HighSchool (2014-2017)</p>
              <h2>Electronic and Computer Class</h2>
              <p>10 - Electronic & Computer Units</p>
              <p>5 - English Units</p>
              <p>3 - Math Units</p>
            </div>
            <div className="container">
              <p>Smart Collage (30/1/2023-13/7/2023)</p>
              <h2>FullStack Dev Course</h2>
              <p>Advanced JS, jQuery, Node.JS, JAVA</p>
              <p>HTML, HTML5, Advanced CSS, React</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

{
  /* <p className="second-p" data-aos-delay="750" data-aos="zoom-in-left">
            In the intricate dance of code, I strive for elegance and clarity.
            Each line meticulously crafted, not just to function but to resonate
            with simplicity and readability.
          </p>
          <br />
          <p className="first-p" data-aos="zoom-in-down">
            Greetings! I'm a passionate Fullstack Web Developer Junior,
            navigating through the boundless realm of technology with 1.5 years
            of dedicated study and hands-on project experience.
          </p>
          <br />
          <p className="third-p" data-aos="zoom-in-right" data-aos-delay="1500">
            Embarking on this journey, I've honed not just technical prowess but
            a treasure trove of personal skills. From problem-solving to
            seamless collaboration, I'm equipped to thrive in the dynamic world
            of development.
          </p>
          <br />
          <p className="forth-p" data-aos="zoom-in-top" data-aos-delay="2250">
            Join me as I weave innovation into existence, one line of code at a
            time.
          </p> */
}
