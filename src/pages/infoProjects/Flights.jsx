import React, { useState } from "react";
import Next from "../../Img/next (1).png";
import Flight1 from "../../Img/FlightsPages/Screenshot 2024-04-15 175805.png";
import Flight2 from "../../Img/FlightsPages/Screenshot 2024-04-15 175826.png";
import Flight3 from "../../Img/FlightsPages/Screenshot 2024-04-15 175841.png";
import Flight4 from "../../Img/FlightsPages/Screenshot 2024-04-15 175849.png";
import Flight5 from "../../Img/FlightsPages/Screenshot 2024-04-15 180005.png";
import Flight6 from "../../Img/FlightsPages/Screenshot 2024-04-15 180019.png";
import Flight7 from "../../Img/FlightsPages/Screenshot 2024-04-15 180034.png";
import Flight8 from "../../Img/FlightsPages/Screenshot 2024-04-15 180045.png";
import Flight9 from "../../Img/FlightsPages/Screenshot 2024-04-15 180103.png";
import Flight10 from "../../Img/FlightsPages/Screenshot 2024-04-15 180111.png";
import Flight11 from "../../Img/FlightsPages/Screenshot 2024-04-15 180156.png";
import Flight12 from "../../Img/FlightsPages/Screenshot 2024-04-15 180204.png";

export default function Flights() {
  const [spreadInfo, setSpreadInfo] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const flightGallery = [
    Flight1,
    Flight2,
    Flight3,
    Flight4,
    Flight5,
    Flight6,
    Flight7,
    Flight8,
    Flight9,
    Flight10,
    Flight11,
    Flight12,
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === flightGallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? flightGallery.length - 1 : prevIndex - 1
    );
  };

  const toggleSpreadInfo = () => {
    setSpreadInfo(!spreadInfo);
  };

  const handleClickOutside = (event) => {
    if (event.target.className === "spread-info") {
      toggleSpreadInfo();
    }
  };

  const handleImageClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="card" onClick={toggleSpreadInfo}>
      <div className="container-flights">
        <div className="hover-text">
          <p>React, MySQL, JSX</p>
        </div>
      </div>
      {spreadInfo && (
        <div className="spread-info" onClick={handleClickOutside}>
          <button
            className="left"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <img src={Next} alt="prevImage" className="icon flip arrow-left" />
          </button>
          <img
            src={flightGallery[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className="full-screen-image"
            data-aos={currentImageIndex + 1 ? "fade-right" : "fade-left"}
            onClick={handleImageClick}
          />
          <button
            className="right"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <img className="icon arrow-right" src={Next} alt="nextImage" />
          </button>
          <div className="flights">
            <h2>Flights Site</h2>
            <p>
              Developed a large-scale website from the ground up, employing
              meticulous attention to detail and comprehensive knowledge.
              Including SQL, Server-Side and Client-Side.
            </p>{" "}
            <br />
          </div>
        </div>
      )}
    </div>
  );
}
