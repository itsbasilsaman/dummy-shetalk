import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from '../New folder/22.png'; // Ensure this path is correct

function FeaturesTwo() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS for animations
  }, []);

  return (
    <>
      <div className="section bg-neutral-200 feature-two">
        <div className="container-default w-container">
          {/* Content Top Section */}
          <div
            data-aos="fade-up"
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
            className="content-top home-features"
          >
            <div className="split-content content-top-home-features-left">
              <h2 className="title home-features">
                Explore What Makes She Talks the Ultimate Support Hub
              </h2>
            </div>
           
          </div>

      
          <div
            data-aos="fade-up"
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
            className="w-layout-grid home-features-grid"
          >
            {/* Card 1 */}
            <div className="card home-feature featured" data-aos="fade-right">
              <div className="split-content card-home-feature">
                
                <div className="card-home-feature-content">
                  <h3 className="title card-home-feature">
                  Expert Mental Health Support
                  </h3>
                  <p className="paragraph card-home-feature">
                  Connect with certified therapists and counselors who specialize in women’s mental well-being, offering personalized guidance and support.
                  </p>
                </div>
              </div>
              <img
                src={Image}
                alt=" "
                className="image card-home-feature"
              />
            </div>

            {/* Card 2 */}
            <div className="card home-feature" data-aos="fade-up">
              <img
                src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b134aef3a3de0f1a597cc4_icon-2-home-features-app-x-template.svg"
                alt=" "
                className="image card-home-feature-icon"
              />
              <div className="card-home-feature-content">
                <h3 className="title card-home-feature">
                Safe & Confidential Space

                </h3>
                <p className="paragraph card-home-feature">
                Share your thoughts and emotions freely in a secure, judgment-free environment designed to prioritize your privacy.

                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card home-feature" data-aos="fade-up">
              <img
                src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b134ae52561bb9b5ba1c64_icon-3-home-features-app-x-template.svg"
                alt=" "
                className="image card-home-feature-icon"
              />
              <div className="card-home-feature-content">
                <h3 className="title card-home-feature">
                Community Connection

                </h3>
                <p className="paragraph card-home-feature">
                Join a supportive network of women, engage in meaningful discussions, and find encouragement from others with similar experiences.

                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="card home-feature" data-aos="fade-up">
              <img
                src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b134af5653bdf00086071f_icon-4-home-features-app-x-template.svg"
                alt=" "
                className="image card-home-feature-icon"
              />
              <div className="card-home-feature-content">
                <h3 className="title card-home-feature">On-Demand Resources
                </h3>
                <p className="paragraph card-home-feature">
                Access a rich library of articles, podcasts, and videos focused on self-care, personal growth, and mental health strategies.

                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="card home-feature" data-aos="fade-up">
              <img
                src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b134aee30ccd3b1c614f4f_icon-5-home-features-app-x-template.svg"
                alt=" "
                className="image card-home-feature-icon"
              />
              <div className="card-home-feature-content">
                <h3 className="title card-home-feature"> Workshops & Webinars
                </h3>
                <p className="paragraph card-home-feature">
                Participate in live sessions led by mental health experts, where you can learn practical techniques for managing stress, enhancing mindfulness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturesTwo;
