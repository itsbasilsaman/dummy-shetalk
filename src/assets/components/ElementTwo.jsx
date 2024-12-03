import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from '@react-spring/web'
import Image from '../New folder/14.png'
import MainImage from '../New folder/45.png'

function ElementTwo() {

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once when it enters the viewport
    threshold: 0.1, // Start animation when 20% of the element is in view
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
      duration: 1400, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing type
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <div className="section bg-neutral-200 changes">
      <div className="container-default w-container">
      <div className="cta-main-wrapper mb-[50px] sm:hidden block">
          <div
            ref={ref}
            style={animationStyles}
            className="cta-wrapper element-one h-[230px] sm:h-[360px] sm:rounded-[80px]"
          >
            <div className="cta-content">
              <animated.h2
                className="title neutral-100 cta feature-seven  my-[40px] ml-[10px] sm:my-[0px] sm:ml-[0px] sm:mt-[25px] sm:text-[37px]"
                style={{opacity:'1'}} // Apply scroll animation to h2
              >
                Empowering women through personalized coaching & supportive community.
              </animated.h2>
              <div className="_2-buttons cta feature-seven">
                
              </div>
            </div>

            <animated.img
              className="image cta element-two-change element-one sm:absolute sm:top-[40%] sm:w-[600px]  sm:mt-[-230px] mt-[0px]"
              src={Image}
              alt=" "
              style={{
                opacity:  1  ,
                transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
                transition: 'all 0.5s ease-out',
                
              }}
              sizes="(max-width: 479px) 76vw, (max-width: 991px) 363.984375px, (max-width: 1919px) 37vw, 398.234375px"
            />

            <div className="cta-bg-wrapper">
             
            </div>
          </div>
        </div>
      <div className="cta-main-wrapper">
          <div
            ref={ref}
            style={animationStyles}
            className="cta-wrapper element-two sm:h-[360px]   sm:block hidden"
          >
           
            <div className="cta-content ">
              <animated.h2
                className="title neutral-100 cta feature-seven sm:ml-[-1045px] sm:w-[800px] sm:mt-[23px] text-[34px] sm:block hidden"
                style={textAnimation} // Apply scroll animation to h2
              >
                Empowering women through personalized coaching, supportive community, and valuable wellness resources for mental health, personal growth, and well-being
              </animated.h2>
              
            </div>

           

            <animated.img
              className="image cta element-two sm:w-[350px] sm:mt-[0px] mt-[0px] sm:mb-[-16px] sm:absolute sm:right-[5%] sm:top-[-2%] sm:block hidden "
              src={MainImage}
              alt=" "
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
                transition: 'all 0.5s ease-out',
              }}
              sizes="(max-width: 479px) 76vw, (max-width: 991px) 363.984375px, (max-width: 1919px) 37vw, 398.234375px"
            />

            <div className="cta-bg-wrapper sm:block hidden ">
             
            </div>
          </div>
        </div>
        <div className="w-layout-grid features-grid sm:pt-[90px] pt-[3px]">
            <div className="card feature element-two" data-aos="fade-up">
              <img
                src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b6752eb8cac203dd7d685f_icon-4-features-app-x-template.svg"
                alt=" "
                className="image card-feature-icon"
              />
              <div className="card-feature-content">
                <h3 className="title card-feature">Mindfulness & Meditation Sessions</h3>
                <p className="paragraph card-feature">
                Participate in live or recorded sessions designed to rcounselorsss, enhance focus, and promote inner peace through guided meditation and mindfulness.
                </p>
              </div>
            </div>
            <div className="card feature element-two" data-aos="fade-up" data-aos-delay="200">
              <img
                src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b6752e50078a7c56b8fea9_icon-5-features-app-x-template.svg"
                alt=" "
                className="image card-feature-icon"
              />
              <div className="card-feature-content">
                <h3 className="title card-feature">
                Goal Setting & Progress Tracking
                </h3>
                <p className="paragraph card-feature">
                Set personal wellness goals, track your progress, and stay motivated with reminders and reflections to support your mental health journey.

                </p>
              </div>
            </div>
            <div className="card feature element-two" data-aos="fade-up" data-aos-delay="400">
              <img
                src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b6752f4d3aa403a8c0d20c_icon-6-features-app-x-template.svg"
                alt=" "
                className="image card-feature-icon"
              />
              <div className="card-feature-content">
                <h3 className="title card-feature">Workshops & Webinars</h3>
                <p className="paragraph card-feature">
                Join live workshops and webinars led by mental health professionals on topics like self-esteem, stress management, and emotional well-being.
                </p>
              </div>
            </div>
            <div className="card feature element-two" data-aos="fade-up">
              <img
                src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b6752fcb2f6d4d92bf0c86_icon-7-features-app-x-template.svg"
                alt=" "
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
                alt=" "
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
                alt=" "
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
    </>
  )
}

export default ElementTwo