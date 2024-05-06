import React, { useEffect, useState } from "react";
import Erik from "../Img/Erik.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div
        id="contact"
        className="contact"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container">
          <img src={Erik} className="profile-pic" />
          <div>
            <strong>eric.bada2@gmail.com</strong>
            <br />
            <strong>Bat-Yam, Harav Maymon st</strong>
            <br />
            <strong>050-7178-557</strong>
            <br />
            {showInput === false && (
              <button
                className="button"
                onClick={() => {
                  setShowInput(true);
                  console.log(showInput);
                }}
              >
                Buy Me a Coffee!
              </button>
            )}
            {showInput && (
              <div className="input-form">
                <input type="email" placeholder="Email.." /> <br />
                <input type="text" placeholder="Subject.." /> <br />
                <input type="text" placeholder="What's on your mind..." />{" "}
                <br />
                <button className="button" onClick={() => setShowInput(false)}>
                  Send
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
