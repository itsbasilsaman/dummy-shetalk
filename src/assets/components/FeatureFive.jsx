import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from '../New folder/12.png';

function FeatureFive() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing type
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <div className="section home-achievements feature-five sm:pt-[0px]">
        <div className="container-default home-achievements w-container sm:pb-[30px]">
          <div
            data-w-id="aba48c1d-8b71-82d5-66d6-5165f00fbc25"
            className="home-achievements-wrapper"
          >
            <div
              className="image-wrapper first-perks feature-five sm:mt-[160px]"
              data-aos="zoom-in" // AOS animation type
            >
              <img
                src={Image}
                alt="Digital Wallet - App X Webflow Template"
                data-w-id="d40c5c42-153e-bd02-a8aa-0b469105f4c3"
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
                className="image first-perks content-two"
              />
              <img
                src="../cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b14960390524eed37f8c79_bg-home-achievements-app-x-template.jpg"
                srcSet="https://assets-global.website-files.com/60b0fc1ddfea6980daf21a18/60b14960390524eed37f8c79_bg-home-achievements-app-x-template-p-500.jpeg 500w, https://assets-global.website-files.com/60b0fc1ddfea6980daf21a18/60b14960390524eed37f8c79_bg-home-achievements-app-x-template-p-800.jpeg 800w, https://assets-global.website-files.com/60b0fc1ddfea6980daf21a18/60b14960390524eed37f8c79_bg-home-achievements-app-x-template-p-1080.jpeg 1080w, https://assets-global.website-files.com/60b0fc1ddfea6980daf21a18/60b14960390524eed37f8c79_bg-home-achievements-app-x-template.jpg 1208w"
                data-w-id="bdba166a-c642-3901-ee0e-6f09b31c3f0f"
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 991px) 720px, (max-width: 1919px) 50vw, 576px"
                alt=""
                className="bg first-perks"
              />
            </div>
            <div
              data-w-id="715431c1-655d-b149-5856-93a29e5252bf"
              style={{
                WebkitTransform:
                  "translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                msTransform:
                  "translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              }}
              className="home-achievements-content"
              data-aos="fade-up"
            >
              <h2 className="title home-achievements">
                She Talks Impact: Empowering Women, Transforming Lives
              </h2>
              <p className="paragraph home-achievements">
                Thousands of women worldwide have found support, guidance, and
                community through She Talks, creating a vibrant network of
                emotional wellness.
              </p>
              <div className="w-layout-grid home-achievements-grid">
                <div
                  className="card home-achievement"
                  data-aos="fade-right"
                >
                  <div className="card-home-achievement-number">
                    100<span className="accent-text-secondary-1">M</span>
                  </div>
                  <div className="card-home-achievement-text">App downloads</div>
                </div>
                <div
                  className="card home-achievement"
                  data-aos="fade-left"
                >
                  <div className="card-home-achievement-number">
                    4.75<span className="accent-text-secondary-2">+</span>
                  </div>
                  <div className="card-home-achievement-text">Average review</div>
                </div>
                <div
                  className="card home-achievement"
                  data-aos="fade-right"
                >
                  <div className="card-home-achievement-number">
                    20<span className="accent-text-secondary-3">M</span>
                  </div>
                  <div className="card-home-achievement-text">Active users</div>
                </div>
                <div
                  className="card home-achievement"
                  data-aos="fade-left"
                >
                  <div className="card-home-achievement-number">
                    40<span className="accent-text-secondary-4">+</span>
                  </div>
                  <div className="card-home-achievement-text">
                    Finance integrations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg home-achievements" />
      </div>
    </>
  );
}

export default FeatureFive;
