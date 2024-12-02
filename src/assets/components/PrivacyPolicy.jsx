import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from '@react-spring/web'


function PrivacyPolicy() {
  const { ref: section1Ref, inView: section1InView } = useInView({ triggerOnce: true })
  const { ref: section2Ref, inView: section2InView } = useInView({ triggerOnce: true })
  const { ref: section3Ref, inView: section3InView } = useInView({ triggerOnce: true })
  const { ref: section4Ref, inView: section4InView } = useInView({ triggerOnce: true })
  const { ref: section5Ref, inView: section5InView } = useInView({ triggerOnce: true })
  const { ref: section6Ref, inView: section6InView } = useInView({ triggerOnce: true })
  const { ref: section7Ref, inView: section7InView } = useInView({ triggerOnce: true })

  // Scroll animations
  const section1Animation = useSpring({
    opacity: section1InView ? 1 : 0,
    transform: section1InView ? 'translateY(0)' : 'translateY(90px)',
    config: { tension: 250, friction: 25 },
  })

  const section2Animation = useSpring({
    opacity: section2InView ? 1 : 0,
    transform: section2InView ? 'translateY(0)' : 'translateY(90px)',
    config: { tension: 250, friction: 25 },
  })

  const section3Animation = useSpring({
    opacity: section3InView ? 1 : 0,
    transform: section3InView ? 'translateY(0)' : 'translateY(90px)',
    config: { tension: 250, friction: 25  },
  })

  const section4Animation = useSpring({
    opacity: section4InView ? 1 : 0,
    transform: section4InView ? 'translateY(0)' : 'translateY(90px)',
    config: { tension: 250, friction: 25 },
  })

  const section5Animation = useSpring({
    opacity: section5InView ? 1 : 0,
    transform: section5InView ? 'translateY(0)' : 'translateY(90px)',
    config: { tension: 250, friction: 25 },
  })

  const section6Animation = useSpring({
    opacity: section6InView ? 1 : 0,
    transform: section6InView ? 'translateY(0)' : 'translateY(90px)',
    config: { tension: 250, friction: 25 },
  })

  const section7Animation = useSpring({
    opacity: section7InView ? 1 : 0,
    transform: section7InView ? 'translateY(0)' : 'translateY(90px)',
    config: { tension: 250, friction: 25 },
  })

  return (
    <>
      <div>
        <div className="page-wrapper">
          <div className="section plan mt-[-80px]">
            <div className="container-default w-container">
              <div className="plan-wrapper">
                <div data-w-id="1f50cb98-5a13-e47e-3d06-d8aaddbf3882" style={{ transform: 'translate3d(0, 80px, 0)' }} className="split-content plan-body">
                  <div className="plan-title-wrapper">
                    <h1 className="title plan">Privacy </h1>
                    <div className="title h1-size plan-text">Policy</div>
                  </div>

                  <animated.div ref={section1Ref} style={section1Animation}>
                    <p className="paragraph plan-excerpt sm:text-[24px] font-semibold">1. Information We Collect</p>
                    <div className="w-layout-grid plan-features-grid">
                      <div className="plan-feature-wrapper">
                        <img src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b6d5ecf9eb628a4ad9cac6_icon-2-check-app-x-template.svg" alt="Check Icon" className="image plan-feature-icon" />
                        <div><span className='font-bold'>Personal Information</span>: When you register for the app, we collect your name, email address, and phone number to facilitate your account creation and authentication (via OTP).</div>
                      </div>
                      <div className="plan-feature-wrapper">
                        <img src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b6d5ecf9eb628a4ad9cac6_icon-2-check-app-x-template.svg" alt="Check Icon" className="image plan-feature-icon" />
                        <div><span className='font-bold'>Mental Health Information</span>: We ask questions regarding your mental health status to improve your experience and provide personalized support. This information is kept confidential.</div>
                      </div>
                      <div className="plan-feature-wrapper">
                        <img src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b6d5ecf9eb628a4ad9cac6_icon-2-check-app-x-template.svg" alt="Check Icon" className="image plan-feature-icon" />
                        <div><span className='font-bold'>Profile Picture</span>: You may upload a profile picture, which is optional and can be updated or deleted at any time.</div>
                      </div>
                    </div>
                  </animated.div>

                  <animated.div ref={section2Ref} style={section2Animation}>
                    <p className="paragraph plan-excerpt sm:text-[24px] font-semibold pt-[35px]">2. How We Use Your Information</p>
                    <div className="plan-feature-wrapper mb-[30px]">
                      <img src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b6d5ecf9eb628a4ad9cac6_icon-2-check-app-x-template.svg" alt="Check Icon" className="image plan-feature-icon" />
                      <div>To create and manage your account.</div>
                    </div>
                    <div className="plan-feature-wrapper">
                      <img src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b6d5ecf9eb628a4ad9cac6_icon-2-check-app-x-template.svg" alt="Check Icon" className="image plan-feature-icon" />
                      <div>To authenticate and verify your identity using OTP.</div>
                    </div>
                  </animated.div>

                  <animated.div ref={section3Ref} style={section3Animation}>
                    <p className="paragraph plan-excerpt sm:text-[24px] font-semibold pt-[35px]">3. Sharing of Information</p>
                    <div className="plan-feature-wrapper">
                      <img src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b6d5ecf9eb628a4ad9cac6_icon-2-check-app-x-template.svg" alt="Check Icon" className="image plan-feature-icon" />
                      <div>If required by law or in response to a valid legal request, we may disclose your information.</div>
                    </div>
                  </animated.div>

                  <animated.div ref={section4Ref} style={section4Animation}>
                    <p className="paragraph plan-excerpt sm:text-[24px] font-semibold pt-[35px]">4. Data Security</p>
                    <div className="plan-feature-wrapper">
                      <img src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b6d5ecf9eb628a4ad9cac6_icon-2-check-app-x-template.svg" alt="Check Icon" className="image plan-feature-icon" />
                      <div>We take the security of your personal information seriously and implement industry-standard security measures to protect it from unauthorized access, alteration, or disclosure.</div>
                    </div>
                  </animated.div>

                  <animated.div ref={section5Ref} style={section5Animation}>
                    <p className="paragraph plan-excerpt sm:text-[24px] font-semibold pt-[35px]">5. Data Retention</p>
                    <div className="plan-feature-wrapper">
                      <img src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b6d5ecf9eb628a4ad9cac6_icon-2-check-app-x-template.svg" alt="Check Icon" className="image plan-feature-icon" />
                      <div>We retain your personal information as long as necessary to provide our services to you and comply with our legal obligations.</div>
                    </div>
                  </animated.div>

                  <animated.div ref={section6Ref} style={section6Animation}>
                    <p className="paragraph plan-excerpt sm:text-[24px] font-semibold pt-[35px]">6. Your Rights</p>
                    <div className="plan-feature-wrapper">
                      <img src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b6d5ecf9eb628a4ad9cac6_icon-2-check-app-x-template.svg" alt="Check Icon" className="image plan-feature-icon" />
                      <div>You can request to update or delete your personal information by contacting us through the app.</div>
                    </div>
                  </animated.div>

                  <animated.div ref={section7Ref} style={section7Animation} >
                    <p className="paragraph plan-excerpt sm:text-[24px] font-semibold pt-[35px]">7. Changes to This Privacy Policy</p>
                    <div className="plan-feature-wrapper pb-[25px]">
                      <img src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b6d5ecf9eb628a4ad9cac6_icon-2-check-app-x-template.svg" alt="Check Icon" className="image plan-feature-icon" />
                      <div>We reserve the right to update this privacy policy at any time. Any changes will be reflected on this page.</div>
                    </div>
                  </animated.div>
                </div>
                <div data-w-id="94ed41ac-aa99-6655-2d33-7b8b2f474a8b" style={{WebkitTransform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 80px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="split-content plan-sidebar">
                  <div className="card get-plan">
                    <div className="card-get-plan-content-top">
                      <h2 className="title h3-size card-get-plan">Contact Us</h2>
                      <p className="paragraph card-get-plan">We’d love to hear from you! Whether you have questions, suggestions, or want to collaborate, feel free to reach out to us.</p>
                    </div>
                    <div className="card-get-plan-add-to-cart">
                      
                    <div className="contact-link-content">
                        <div className="contact-link-title">Email us</div>
                        <div className="contact-link-text"> contact@she-talks.com
                        </div>
                      </div>
                      <div className="contact-link-content">
                        <div className="contact-link-title">Call us</div>
                        <div className="contact-link-text">9004114517</div>
                      </div>
                      <div className="contact-link-content">
                        <div className="contact-link-title">Address</div>
                        <div className="contact-link-text">Kozhikode, near civil station 673001, Kerala,India </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy
