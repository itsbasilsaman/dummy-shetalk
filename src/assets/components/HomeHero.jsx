import React, { useEffect, useState } from 'react';
import Image from '../New folder/45.png';

const HomeHero = () => {
  const fullText = "She Talk: Your space to grow, heal and shine.";
  const initialText = "She Talk: Your";
  const [displayedText, setDisplayedText] = useState(initialText);
  const [animateText, setAnimateText] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track toggle menu

  useEffect(() => {
    setAnimateText(true);

    let index = initialText.length;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section home-hero">
      <div className="container-default home-hero w-container">
        {/* Hamburger Toggle Icon */}
        <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className={`home-hero-wrapper ${isMenuOpen ? 'open' : ''}`}>
          <div className="home-hero-content">
            <h1
              className={`sm:w-[760px] ${animateText ? 'text-animate' : ''} home-head-content home `}
              style={{
                transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                opacity: 1,
              }}
            >
              She Talks <br /> Your space to <br /> grow, heal and shine
            </h1>
            { ( // Display content only when the toggle is open
              <>
                <p
                  className={`paragraph-large home-hero  ${animateText ? 'text-animate' : ''}`}
                  style={{
                    transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                    opacity: 1,
                  }}
                >
                  At the heart of Slack are channels: organised spaces for everyone and everything that you need for work. In channels, it’s easier to connect across departments, offices, time zones, and even other companies.
                </p>
                <div
                  className={`_2-buttons home-hero ${animateText ? 'text-animate' : ''}`}
                  style={{
                    transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                    opacity: 1,
                  }}
                >
                  <a
                    href="https://play.google.com/store/apps/details?id=com.shetalks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-primary download-btn download-app _2-buttons-button w-inline-block"
                  >
                    <div className="download-app-wrapper">
                      <div className="download-apple-icon"></div>
                      <div>Download for iOS</div>
                    </div>
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.shetalks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-primary download-btn download-app w-inline-block"
                  >
                    <div className="download-app-wrapper">
                      <div className="download-android-icon"></div>
                      <div>Download for Android</div>
                    </div>
                  </a>
                </div>
              </>
            )}
          </div>

          {/* Hero Image Wrapper */}
          <div className="hero-image-wrapper">
            <div className="hero-image-wrapper-one">
              <img
                src={Image}
                alt="App - App X Webflow Template"
                className="image home-hero"
              />
              <div className="bg home-hero">
                <div className="image bg-home-hero"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add some responsive CSS */}
       
    </div>
  );
};

export default HomeHero;
