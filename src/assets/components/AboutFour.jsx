import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "../New folder/22.png";

function AboutFour() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing type
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="section adjust-size">
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
            alt=" "
            className="image first-perks content-one"
            data-aos="fade-up" // Adding AOS animation type
          />
        </div>
        <div
          className="first-perks-content"
          data-aos="fade-left" // Adding AOS animation type
        >
          <h2 className="title first-perks py-[20px] sm:py-[0px]">
             Our Vision behind this Application.
          </h2>
            <div>
            Our vision for She Talks is to become a global beacon of empowerment, where women from all walks of life can come together to connect, grow, and thrive. We aspire to cultivate a community that fosters resilience, promotes mental well-being, and celebrates individuality while breaking barriers and building a more inclusive world. Through She Talks, we envision a future where every woman feels heard, valued, and empowered to reach her fullest potential.
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutFour