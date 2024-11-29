import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from '../New folder/32.png';

function FeatureFour() {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing type
      once: true, // Whether the animation should happen only once
    });
  }, []);

  return (
    <>
      <div className="section bg-neutral-200">
        <div className="container-default w-container">
          <div className="second-perks-wrapper">
            <div
              data-aos="fade-up" // AOS animation type
              className="second-perks-content"
            >
              <h2 className="title second-perks  py-[20px] sm:py-[0px]">
                Personalized Support & Daily Motivation
              </h2>

              <div className="w-layout-grid second-perks-grid">
                <div
                  className="second-perk-wrapper"
                  data-aos="fade-right" // AOS animation for individual grid items
                >
                  <img
                    src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b13bb3c9696c74c876dac5_icon-3-home-perks-app-x-template.svg"
                    alt="Monthly Reports - App X Webflow Template"
                    className="image second-perk-icon"
                  />
                  <div className="second-perk-content">
                    <h3 className="title h5-size second-perk">
                      Confidential Peer Support
                    </h3>
                    <p className="paragraph second-perk">
                      Engage in private, supportive conversations with other women who understand your journey, fostering a sense of community and solidarity.
                    </p>
                  </div>
                </div>
                <div
                  className="second-perk-wrapper"
                  data-aos="fade-left" // AOS animation for individual grid items
                >
                  <img
                    src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b13bb39c5ee13b6dbec093_icon-4-home-perks-app-x-template.svg"
                    alt="Transactions History - App X Webflow Template"
                    className="image second-perk-icon"
                  />
                  <div className="second-perk-content">
                    <h3 className="title h5-size second-perk">
                      Progress Tracking
                    </h3>
                    <p className="paragraph second-perk">
                      Monitor your emotional wellness journey with tools that help you track your progress, set goals, and celebrate your growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="image-wrapper second-perks"
              data-aos="zoom-in" // AOS animation for the image section
            >
              <img
                src=""
                srcSet="https://assets-global.website-files.com/60b0fc1ddfea6980daf21a18/60d6472440457969e6ce56d0_bg-2-perks-app-x-template-p-500.jpeg 500w, https://assets-global.website-files.com/60b0fc1ddfea6980daf21a18/60d6472440457969e6ce56d0_bg-2-perks-app-x-template-p-800.jpeg 800w, https://assets-global.website-files.com/60b0fc1ddfea6980daf21a18/60d6472440457969e6ce56d0_bg-2-perks-app-x-template-p-1080.jpeg 1080w, https://assets-global.website-files.com/60b0fc1ddfea6980daf21a18/60d6472440457969e6ce56d0_bg-2-perks-app-x-template.jpg 1158w"
                sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 720px, (max-width: 1919px) 52vw, 579px"
                alt=""
                className="bg second-perks"
              />
              <img
                src={Image}
                alt="Finance - App X Webflow Template"
                className="image second-perks"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureFour;
