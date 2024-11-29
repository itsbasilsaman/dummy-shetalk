import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "../New folder/22.png";

function FeatureThree() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing type
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="section">
      <div className="container-default w-container">
        <div className="first-perks-wrapper">
          <div
            className="image-wrapper first-perks"
            data-aos="zoom-in" // Adding AOS animation type
          >
            <img
              srcSet="https://assets-global.website-files.com/60b0fc1ddfea6980daf21a18/60d64725a20746b4b54c1196_bg-1-perks-app-x-template-p-500.jpeg 500w, https://assets-global.website-files.com/60b0fc1ddfea6980daf21a18/60d64725a20746b4b54c1196_bg-1-perks-app-x-template-p-1080.jpeg 1080w, https://assets-global.website-files.com/60b0fc1ddfea6980daf21a18/60d64725a20746b4b54c1196_bg-1-perks-app-x-template.jpg 1152w"
              sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 720px, (max-width: 1919px) 50vw, 576px"
              alt=""
              className="bg first-perks"
            />
            <img
              src={Image}
              alt="App - App X Webflow Template"
              className="image first-perks content-one"
              data-aos="fade-up" // Adding AOS animation type
            />
          </div>
          <div
            className="first-perks-content"
            data-aos="fade-left" // Adding AOS animation type
          >
            <h2 className="title first-perks py-[20px] sm:py-[0px]">
              Personalized Support & Daily Motivation
            </h2>
            <div className="w-layout-grid first-perks-grid">
              <div
                className="first-perk-wrapper"
                data-aos="fade-right" // Adding AOS animation type
              >
                <img
                  src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b13bb2ffb599118d50ddf8_icon-1-home-perks-app-x-template.svg"
                  alt="Send Payments - App X Webflow Template"
                  className="image first-perk-icon"
                />
                <div className="first-perk-content">
                  <h3 className="title h5-size first-perk">
                    Customized Wellness Plans
                  </h3>
                  <p className="paragraph first-perk">
                    Receive personalized mental health plans tailored to your
                    unique needs, helping you take actionable steps toward
                    emotional well-being.
                  </p>
                </div>
              </div>
              <div
                className="first-perk-wrapper"
                data-aos="fade-left" // Adding AOS animation type
              >
                <img
                  src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b13bb2d1d32703a0c01833_icon-2-home-perks-app-x-template.svg"
                  alt="Request Payments - App X Webflow Template"
                  className="image first-perk-icon"
                />
                <div className="first-perk-content">
                  <h3 className="title h5-size first-perk">
                    Daily Inspiration & Tips
                  </h3>
                  <p className="paragraph first-perk">
                    Get daily motivational quotes and mental health tips to
                    keep you inspired and on track with your self-care journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureThree;
