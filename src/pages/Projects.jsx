import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import PhotoShooter from "./infoProjects/PhotoShooter";
import Flights from "./infoProjects/Flights";

export default function Projects() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="projects" className="projects">
      <h1>Projects</h1>
      <PhotoShooter className="column" />
      <Flights className="column" />
    </div>
  );
}

{
  /* <div className="container" data-aos="zoom-in-left">
        <h2>Flights Project</h2>
<p>
    Developed a large-scale website from the ground up, employing meticulous attention to detail and comprehensive knowledge.
    <br />
    Implemented a robust database structure utilizing MySQL, including the assignment of primary keys, foreign keys, and intricate inner join operations.
    <br />
    Utilized a Server-Side architecture following the Model-View-Controller (MVC) pattern, ensuring scalability, maintainability, and efficient data handling.
    <br />
    Established RESTful APIs for authentication, authorization, token management, and seamless data manipulation, adhering to industry standards and best practices.
    <br />
    Employed React on the Client-Side, focusing on optimizing each page to contain fewer than 150 rows of code. Leveraged a multitude of custom-built components to achieve this goal, enhancing modularity and code maintainability.
</p>
<br />
<h3>Reason for Project Selection:</h3>
<p>
    The decision to undertake this project stemmed from a desire to gain comprehensive expertise across all facets of software development, encompassing Database Management, Server-Side Operations, and Client-Side Development. 
    <br />
    By intentionally limiting the use of external libraries to only the most essential, the project aimed to foster a deep understanding of foundational concepts and facilitate the exploration of intricacies within existing frameworks, enabling informed decision-making and promoting code reusability.
</p>
      </div>
      <div className="container" data-aos="zoom-in-left" data-aos-delay="100">
        <h2>Photoshooter Site</h2>
        <p>Small-Scale site. Built from scratch</p>
        <p>
          React - This Project aim was to optimize my CSS skills, and also
          learning how to handle gallerys of pictures.
        </p>
</div>*/
}
