import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from '@react-spring/web'
import Image from '../New folder/55.png'

function ElementOne() {
 
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
    <>
      <div className="section features-hero features-one-change">
        <div className="container-medium-730px features-hero">
          <h1
            className="title features-hero"
            data-aos="fade-up" // Adding AOS animation
          >
            Our features
          </h1>
          <p
            className="paragraph features-hero"
            data-aos="fade-up" // Adding AOS animation
            data-aos-delay="200" // Adding delay
          >
            Unlock Your Potential with She Talks: A Community of Empowerment and Support.
          </p>
          <div
            className="_2-buttons features-hero"
            data-aos="fade-up" // Adding AOS animation
            data-aos-delay="400" // Adding delay
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.shetalks"
              target="_blank"
              className="button-primary download-app _2-buttons-button w-inline-block"
            >
              <div className="download-app-wrapper">
                <div className="download-apple-icon"></div>
                <div>Download for iOS</div>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.shetalks"
              target="_blank"
              className="button-primary download-app w-inline-block"
            >
              <div className="download-app-wrapper">
                <div className="download-android-icon"></div>
                <div>Download for Android</div>
              </div>
            </a>
          </div>
        </div>
        <div className="container-default w-container">
        <div className="cta-main-wrapper main-content mb-[50px] sm:pt-[73px] pt-[0px]">
          <div
            ref={ref}
            style={animationStyles}
            className="cta-wrapper element-one h-[230px] sm:h-[360px] sm:rounded-[80px]"
          >
            <div className="cta-content">
              <animated.h2
                className="title neutral-100 cta feature-seven  my-[40px] ml-[10px] sm:my-[0px] sm:ml-[0px] sm:mt-[25px] sm:text-[37px]"
                style={textAnimation} // Apply scroll animation to h2
              >
                She Talks empowers women with tools for mental wellness and personal growth
              </animated.h2>
              <div className="_2-buttons cta feature-seven">
                
              </div>
            </div>

            <animated.img
              className="image cta element-one sm:absolute sm:top-[40%] sm:w-[600px]  sm:mt-[-230px] mt-[0px]"
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
              {/* <img
                src={Image}
                srcSet="https://assets-global.website-files.com/60b0fc1ddfea6980daf21a18/60b177aeb3c2f367fe8035b4_bg-cta-app-x-template-p-1080.jpeg 1080w, https://assets-global.website-files.com/60b0fc1ddfea6980daf21a18/60b177aeb3c2f367fe8035b4_bg-cta-app-x-template-p-1600.jpeg 1600w, https://assets-global.website-files.com/60b0fc1ddfea6980daf21a18/60b177aeb3c2f367fe8035b4_bg-cta-app-x-template-p-2000.jpeg 2000w, https://assets-global.website-files.com/60b0fc1ddfea6980daf21a18/60b177aeb3c2f367fe8035b4_bg-cta-app-x-template.jpg 2448w"
                sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1919px) 96vw, 1224px"
                alt=""
                className="bg cta"
              /> */}
            </div>
          </div>
        </div>
          <div className="w-layout-grid features-grid">
            <div className="card feature" data-aos="fade-up">
              <img
                src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b6752ebe3ede48b9074744_icon-1-features-app-x-template.svg"
                alt=" "
                className="image card-feature-icon"
              />
              <div className="card-feature-content">
                <h3 className="title card-feature">Live Coaching & Mentoring</h3>
                <p className="paragraph card-feature">
                Access personalized one-on-one sessions with experienced coaches and mentors to guide your mental health journey and personal growth.

                </p>
              </div>
            </div>
            <div className="card feature" data-aos="fade-up" data-aos-delay="200">
              <img
                src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b6752e339cfb9bc73c4c4c_icon-2-features-app-x-template.svg"
                alt=" "
                className="image card-feature-icon"
              />
              <div className="card-feature-content">
                <h3 className="title card-feature">
                Community Support Forum
                </h3>
                <p className="paragraph card-feature">
                A safe, welcoming space for women to share experiences, ask questions, and offer support to one another in a judgment-free environment.

                </p>
              </div>
            </div>
            <div className="card feature" data-aos="fade-up" data-aos-delay="400">
              <img
                src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b6752e8cf986634363c71a_icon-3-features-app-x-template.svg"
                alt=" "
                className="image card-feature-icon"
              />
              <div className="card-feature-content">
                <h3 className="title card-feature">Wellness Resources Library</h3>
                <p className="paragraph card-feature">
                Explore a variety of resources, including articles, podcasts, and videos on mental wellness, stress management, mindfulness, and self-care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ElementOne;
