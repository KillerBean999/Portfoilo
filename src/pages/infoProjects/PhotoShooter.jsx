import React, { useState } from "react";
import Next from "../../Img/next (1).png";
import PS1 from "../../Img/PhotoShooterPages/Screenshot 2024-04-13 183517.png";
import PS2 from "../../Img/PhotoShooterPages/Screenshot 2024-04-13 183527.png";
import PS3 from "../../Img/PhotoShooterPages/Screenshot 2024-04-13 183611.png";
import PS4 from "../../Img/PhotoShooterPages/Screenshot 2024-04-13 183640.png";

export default function PhotoShooter() {
  const [spreadInfo, setSpreadInfo] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const PhotoshooterUrls = [PS1, PS2, PS3, PS4];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === PhotoshooterUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? PhotoshooterUrls.length - 1 : prevIndex - 1
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
      <div className="container-photoshooter">
        <div className="hover-text">
          <p>React, JSX</p>
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
            <img className="icon flip arrow-left" src={Next} alt="prevImage" />
          </button>

          <img
            className="full-screen-image"
            src={PhotoshooterUrls[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
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
          <div className="photoshooter">
            <h2>PhotoShooter Site</h2>
            <p>
              An immersive web platform designed for photography enthusiasts,
              offering a seamless experience to showcase and explore captivating
              visual content. Utilizing React and JSX technologies, it provides
              intuitive navigation and stunning image displays, enhancing the
              way users interact with photography online.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
