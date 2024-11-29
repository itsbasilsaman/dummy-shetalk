import React, { useEffect, useRef } from "react";
import Image from '../New folder/22.png'; 

function FeatureThree() {
  const perksContentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (perksContentRef.current) {
      observer.observe(perksContentRef.current);
    }

    return () => {
      if (perksContentRef.current) {
        observer.unobserve(perksContentRef.current);
      }
    };
  }, []);

  return (
    <div className="section">
      <div className="container-default w-container">
        <div className="first-perks-wrapper">
        <div className="image-wrapper first-perks">
            <img
              src="../cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60d64725a20746b4b54c1196_bg-1-perks-app-x-template.jpg"
              srcSet="https://assets-global.website-files.com/60b0fc1ddfea6980daf21a18/60d64725a20746b4b54c1196_bg-1-perks-app-x-template-p-500.jpeg 500w, https://assets-global.website-files.com/60b0fc1ddfea6980daf21a18/60d64725a20746b4b54c1196_bg-1-perks-app-x-template-p-1080.jpeg 1080w, https://assets-global.website-files.com/60b0fc1ddfea6980daf21a18/60d64725a20746b4b54c1196_bg-1-perks-app-x-template.jpg 1152w"
              data-w-id="40cf2ef2-bb08-8ac9-eacd-c1000ecd8a9b"
              sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 720px, (max-width: 1919px) 50vw, 576px"
              alt=""
              className="bg first-perks"
            />
            <img
              src={Image}
              alt="App - App X Webflow Template"
              style={{
                WebkitTransform:
                  "translate3d(0, 0, 0) scale3d(1.1, 1.1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 0, 0) scale3d(1.1, 1.1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                msTransform:
                  "translate3d(0, 0, 0) scale3d(1.1, 1.1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(0, 0, 0) scale3d(1.1, 1.1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                
              }}
              data-w-id="98e9122a-9983-0aae-f65d-3385a55a9545"
              className="image first-perks  content-one"
            />
          </div>
          <div
            className="first-perks-content"
            ref={perksContentRef}
          >
            <h2 className="title first-perks">
              Personalized Support & Daily Motivation

            </h2>
            
            <div className="w-layout-grid first-perks-grid">
              <div className="first-perk-wrapper">
                <img
                  src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b13bb2ffb599118d50ddf8_icon-1-home-perks-app-x-template.svg"
                  alt="Send Payments - App X Webflow Template"
                  className="image first-perk-icon "
                />
                <div className="first-perk-content">
                  <h3 className="title h5-size first-perk">Customized Wellness Plans</h3>
                  <p className="paragraph first-perk">
                  Receive personalized mental health plans tailored to your unique needs, helping you take actionable steps toward emotional well-being
                  </p>
                </div>
              </div>
              <div className="first-perk-wrapper">
                <img
                  src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b13bb2d1d32703a0c01833_icon-2-home-perks-app-x-template.svg"
                  alt="Request Payments - App X Webflow Template"
                  className="image first-perk-icon"
                />
                <div className="first-perk-content">
                  <h3 className="title h5-size first-perk"> Daily Inspiration & Tips</h3>
                  <p className="paragraph first-perk">
                  Get daily motivational quotes and mental health tips to keep you inspired and on track with your self-care journey.
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
