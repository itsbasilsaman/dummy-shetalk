import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from '@react-spring/web'
import Image from '../New folder/22.png'

function FeatureSeven() {
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

  return (
    <div className="  cta  feature-seven">
      <div className="container-default w-container">
        <div className="cta-main-wrapper">
          <div
            ref={ref}
            style={animationStyles}
            className="cta-wrapper"
          >
            <div className="cta-content">
              <animated.h2
                className="title neutral-100 cta feature-seven"
                style={textAnimation} // Apply scroll animation to h2
              >
                Take the first step toward emotional well-being
              </animated.h2>
              <div className="_2-buttons cta feature-seven">
                <animated.a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  className="button-primary download-app _2-buttons-button w-inline-block"
                  style={textAnimation} // Apply scroll animation to "Download for iOS"
                >
                  <div className="download-app-wrapper">
                    <div className="download-apple-icon"></div>
                    <div>Download for iOS</div>
                  </div>
                </animated.a>
                <animated.a
                  href="https://play.google.com/"
                  target="_blank"
                  className="button-primary download-app w-inline-block"
                  style={textAnimation} // Apply scroll animation to "Download for Android"
                >
                  <div className="download-app-wrapper">
                    <div className="download-android-icon"></div>
                    <div>Download for Android</div>
                  </div>
                </animated.a>
              </div>
            </div>

            <animated.img
              className="image cta"
              src={Image}
              alt=" "
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
                transition: 'all 0.5s ease-out',
              }}
              sizes="(max-width: 479px) 76vw, (max-width: 991px) 363.984375px, (max-width: 1919px) 37vw, 398.234375px"
            />

            <div className="cta-bg-wrapper">
              <img
                src={Image}
                srcSet="https://assets-global.website-files.com/60b0fc1ddfea6980daf21a18/60b177aeb3c2f367fe8035b4_bg-cta-app-x-template-p-1080.jpeg 1080w, https://assets-global.website-files.com/60b0fc1ddfea6980daf21a18/60b177aeb3c2f367fe8035b4_bg-cta-app-x-template-p-1600.jpeg 1600w, https://assets-global.website-files.com/60b0fc1ddfea6980daf21a18/60b177aeb3c2f367fe8035b4_bg-cta-app-x-template-p-2000.jpeg 2000w, https://assets-global.website-files.com/60b0fc1ddfea6980daf21a18/60b177aeb3c2f367fe8035b4_bg-cta-app-x-template.jpg 2448w"
                sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1919px) 96vw, 1224px"
                alt=""
                className="bg cta"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureSeven
