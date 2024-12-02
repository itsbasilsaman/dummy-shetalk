import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from '@react-spring/web'

function RefundPolicy() {

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
                    <h1 className="title plan">
                    Refund </h1>
                    <div className="title h1-size plan-text">Policy</div>
                  </div>
                  <p>At She Talks, we aim to provide the best possible experience for all our users. However, in the event of a payment error or incorrect transaction, we are committed to resolving the issue swiftly and fairly.</p>

                  <animated.div ref={section1Ref} style={section1Animation}>
                    <p className="paragraph plan-excerpt refund-policy sm:text-[24px] mb-[10px] font-semibold text-black">1. Refund Eligibility</p>
                    <span className=''>Refunds may be issued under the following circumstances:</span>
                    <div className="w-layout-grid plan-features-grid">
                      
                      <div className="plan-feature-wrapper mt-[25px]">
                        <img src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b6d5ecf9eb628a4ad9cac6_icon-2-check-app-x-template.svg" alt="Check Icon" className="image plan-feature-icon" />
                        <div><span className='font-bold'>Transaction Errors</span>: If you have been charged incorrectly due to a system error, duplicate charge, or other technical issue, you are eligible for a refund.</div>
                      </div>
                      <div className="plan-feature-wrapper">
                        <img src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b6d5ecf9eb628a4ad9cac6_icon-2-check-app-x-template.svg" alt="Check Icon" className="image plan-feature-icon" />
                        <div><span className='font-bold'>Service Not Received</span> : If you have paid for a service or subscription but did not receive the service within a reasonable time frame, a refund may be provided.</div>
                      </div>
                      
                    </div>
                  </animated.div>

                  <animated.div ref={section2Ref} style={section2Animation}>
                    <p className="paragraph plan-excerpt refund-policy sm:text-[24px] font-semibold pt-[35px] text-black">2. Refund Request Process</p>
                    <span>To request a refund, please follow these steps:</span>
                    <div className="plan-feature-wrapper mb-[15px] mt-[25px]">
                      <img src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b6d5ecf9eb628a4ad9cac6_icon-2-check-app-x-template.svg" alt="Check Icon" className="image plan-feature-icon" />
                      <div><span className='font-bold'>Contact Us</span>: Reach out to us through the contact details provided below within 7 days of the transaction.</div>
                    </div>
                    <div className="plan-feature-wrapper mb-[15px]">
                      <img src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b6d5ecf9eb628a4ad9cac6_icon-2-check-app-x-template.svg" alt="Check Icon" className="image plan-feature-icon" />
                      <div><span className='font-bold'>Provide Transaction Details</span>: Include the details of the transaction in question, such as the payment date, amount, and any error or issue you experienced.</div>
                    </div>
                    <div className="plan-feature-wrapper">
                      <img src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b6d5ecf9eb628a4ad9cac6_icon-2-check-app-x-template.svg" alt="Check Icon" className="image plan-feature-icon" />
                      <div><span className='font-bold'>Review Process</span>: We will review your request and determine eligibility based on the nature of the issue and the timing of the request.</div>
                    </div>
                  </animated.div>

                  <animated.div ref={section3Ref} style={section3Animation}>
                    <p className="paragraph plan-excerpt refund-policy sm:text-[24px] font-semibold pt-[35px] text-black">3. Refund Timeline</p>
                    <div className="plan-feature-wrapper my-[25px]">
                      <img src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b6d5ecf9eb628a4ad9cac6_icon-2-check-app-x-template.svg" alt="Check Icon" className="image plan-feature-icon" />
                      <div>Once your refund request is approved, the money will be refunded to your original payment method within 7 business days.</div>
                    </div>
                  </animated.div>

                  <animated.div ref={section4Ref} style={section4Animation}>
                  <p className="paragraph plan-excerpt refund-policy sm:text-[24px] mb-[10px] font-semibold text-black">4. Non-Refundable Situations</p>
                    <span className=''>Please note that refunds are generally not applicable in the following cases:</span>
                    <div className="w-layout-grid plan-features-grid">
                      
                      <div className="plan-feature-wrapper mt-[25px]">
                        <img src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b6d5ecf9eb628a4ad9cac6_icon-2-check-app-x-template.svg" alt="Check Icon" className="image plan-feature-icon" />
                        <div><span className='font-bold'>Change of Mind</span> : Refunds will not be granted if the user simply changes their mind about the purchase or service.</div>
                      </div>
                      <div className="plan-feature-wrapper">
                        <img src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b6d5ecf9eb628a4ad9cac6_icon-2-check-app-x-template.svg" alt="Check Icon" className="image plan-feature-icon" />
                        <div><span className='font-bold'>Change of Mind</span>: Refunds will not be granted if the user simply changes their mind about the purchase or service.</div>
                      </div>
                      <div className="plan-feature-wrapper">
                        <img src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/60b6d5ecf9eb628a4ad9cac6_icon-2-check-app-x-template.svg" alt="Check Icon" className="image plan-feature-icon" />
                        <div><span className='font-bold'>Expired Request</span>: Refund requests made after 7 days of the transaction will not be processed.</div>
                      </div>
                      
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

export default RefundPolicy