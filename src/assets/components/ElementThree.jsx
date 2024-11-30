import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from '@react-spring/web'

function ElementThree() {

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once when it enters the viewport
    threshold: 0.2, // Start animation when 20% of the element is in view
  })

  // Animation for the CTA section
  const animationStyles = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 50px, 0)',
    config: { tension: 200, friction: 30 },
  })

  // Animation for the h2 and button content to slide from the right
  const textAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(50px, 0, 0)',
    config: { tension: 200, friction: 30 },
  })


  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing type
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div>
       <div className="section">
      <div className="container-default w-container">
        <div
          data-w-id="068ff413-5bcf-0a8f-c4a6-54b20ec0c5eb"
          style={{
            WebkitTransform:
              "translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            // opacity: 0
          }}
          className="feature-2-wrapper"
        >
          <div
            data-w-id="068ff413-5bcf-0a8f-c4a6-54b20ec0c5ed"
            style={{
              WebkitTransform:
                "translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              MozTransform:
                "translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              msTransform:
                "translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              transform:
                "translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              // opacity: 0
            }}
            className="feature-2-content"
          >
            <h2 className="title neutral-100 feature-2">
              Features to improve your personal finances
            </h2>
            <p className="paragraph-large neutral-100 feature-2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis
              venenatis eget tellus diam ante facilisis proin porta turpis
              sapien.
            </p>
          </div>
          
           
        </div>
        <div className="w-layout-grid features-grid sm:pt-[90px] pt-[95px]">
            <div className="card feature element-two" data-aos="fade-up">
              <img
                src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b6752fcb2f6d4d92bf0c86_icon-7-features-app-x-template.svg"
                alt="Digital Wallet - App X Webflow Template"
                className="image card-feature-icon"
              />
              <div className="card-feature-content">
                <h3 className="title card-feature">Mental Health Self-Assessments</h3>
                <p className="paragraph card-feature">
                Take quick, anonymous assessments to evaluate your mental health status and receive tailored advice for improving your well-being.
                </p>
              </div>
            </div>
            <div className="card feature element-two" data-aos="fade-up" data-aos-delay="200">
              <img
                src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b6752fcb2f6d8ee9bf0c87_icon-8-features-app-x-template.svg"
                alt="Portfolio - App X Webflow Template"
                className="image card-feature-icon"
              />
              <div className="card-feature-content">
                <h3 className="title card-feature">
                Private Journaling Feature
                </h3>
                <p className="paragraph card-feature">
                Use a secure, private space to express your thoughts, reflect on your emotions, and track your personal growth over time.
                </p>
              </div>
            </div>
            <div className="card feature element-two" data-aos="fade-up" data-aos-delay="400">
              <img
                src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b6752f4d3aa4233bc0d20d_icon-9-features-app-x-template.svg"
                alt="Send Payments - App X Webflow Template"
                className="image card-feature-icon"
              />
              <div className="card-feature-content">
                <h3 className="title card-feature">Daily Affirmations & Inspirations</h3>
                <p className="paragraph card-feature">
                Receive daily positive affirmations and motivational quotes designed to uplift your mood and encourage a positive mindset throughout the day.

                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default ElementThree