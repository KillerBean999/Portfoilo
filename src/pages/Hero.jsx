import React from "react";
import Arrow from "../Img/reshot-icon-down-arrow-VUE5WQFCX2.svg";
import Img from "../Img/Erik.jpg";

export default function Hero() {
  return (
    <div id="hero" className="hero">
      <img className="profile-img" src={Img} alt="Img" />
      <div className="swipe-animation">
        <h3>Hi I'm</h3>
        <h2>Erik Bada</h2>
        <h1>FullStack Developer</h1>
      </div>
      <div className="resume-link">
        <img src={Arrow} alt="Arrow" className="arrow" />
        <a href="">CV</a>
      </div>
    </div>
  );
}
