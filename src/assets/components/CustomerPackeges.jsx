import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from '@react-spring/web'
import { BsArrowRightCircle } from "react-icons/bs";


function CustomerPackeges() {

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
                <div data-w-id="1f50cb98-5a13-e47e-3d06-d8aaddbf3882" style={{ transform: 'translate3d(0, 80px, 0)' }} className="split-content plan-body px-[15px]">
                  <div className="plan-title-wrapper">
                    <h1 className="title plan package-head ml-[-10px]" >
                    Customer</h1>
                    <div className="title h1-size plan-text package-head"> Packages</div>
                  </div>
                  <p  className='package-subhead'> Initially for all customers for the first time, first 5 minutes of Chat  and first 10 mins of Call should be free.
                  </p>

                  <animated.div ref={section1Ref} style={section1Animation} className='pt-[14px]'>
                    <p className="paragraph plan-excerpt refund-policy sm:text-[24px] mb-[10px] font-extrabold text-black">1. Companion Starter – Basic Package
                    </p>
                    <div className="w-layout-grid plan-features-grid">
                      
                      <div className="plan-feature-wrapper mt-[25px]">
                      <BsArrowRightCircle className='text-[22px] sm:text-[25px] sm:mr-[15px] mr-[10px]' style={{color:'#DA1C5C'}} />
                        <div><span className='font-bold'> New Price</span> : 820 INR 
                        </div>
                      </div>
                      <div className="plan-feature-wrapper">
                      <BsArrowRightCircle className='text-[22px] sm:text-[25px] sm:mr-[15px] mr-[10px]' style={{color:'#DA1C5C'}} />
                        <div><span className='font-bold'>Voice Call Duration</span>: 35 minutes
                        </div>
                      </div>
                       
                      <div className="plan-feature-wrapper">
                      <BsArrowRightCircle className='text-[22px] sm:text-[25px] sm:mr-[15px] mr-[10px]' style={{color:'#DA1C5C'}} />
                        <div><span className='font-bold'>Free Chat Messages</span>: 15 messages

                        </div>
                      </div>
                      <span className='mt-[10px] package-subhead'>Please note that prior bookings are not available for trainers. All calls are subject to trainer availability at the time of your request.
                      </span>
                      
                    </div>
                  </animated.div>

                  <animated.div ref={section2Ref} style={section2Animation} className='mt-[25px]'>
                    <p className="paragraph plan-excerpt refund-policy sm:text-[24px] mb-[10px] font-extrabold text-black">2. Buddy Bundle – Standard Package
                    </p>
                    <div className="w-layout-grid plan-features-grid">
                      
                      <div className="plan-feature-wrapper mt-[25px]">
                      <BsArrowRightCircle className='text-[22px] sm:text-[25px] sm:mr-[15px] mr-[10px]' style={{color:'#DA1C5C'}} />
                        <div><span className='font-bold'> New Price</span> : 1150 INR 
                        </div>
                      </div>
                      <div className="plan-feature-wrapper">
                      <BsArrowRightCircle className='text-[22px] sm:text-[25px] sm:mr-[15px] mr-[10px]' style={{color:'#DA1C5C'}} />
                        <div><span className='font-bold'>Voice Call Duration</span> : 60 minutes

                        </div>
                      </div>
                       
                      <div className="plan-feature-wrapper">
                      <BsArrowRightCircle className='text-[22px] sm:text-[25px] sm:mr-[15px] mr-[10px]' style={{color:'#DA1C5C'}} />
                        <div><span className='font-bold'>Free Chat Messages</span> : 30 messages

                        </div>
                      </div>
                      <span className='mt-[10px] package-subhead'>Please note that prior bookings are not available for trainers. All calls are subject to trainer availability at the time of your request.

                      </span>
                      
                    </div>
                  </animated.div>

                  <animated.div ref={section3Ref} style={section3Animation} className='mt-[25px]'>
                    <p className="paragraph plan-excerpt refund-policy sm:text-[24px] mb-[10px] font-extrabold text-black">3. Ultimate Kit – Premium Package

                    </p>
                    <div className="w-layout-grid plan-features-grid">
                      
                      <div className="plan-feature-wrapper mt-[25px]">
                      <BsArrowRightCircle className='text-[22px] sm:text-[25px] sm:mr-[15px] mr-[10px]' style={{color:'#DA1C5C'}} />
                        <div><span className='font-bold'> New Price</span> : 2300 INR
                        </div>
                      </div>
                      <div className="plan-feature-wrapper">
                      <BsArrowRightCircle className='text-[22px] sm:text-[25px] sm:mr-[15px] mr-[10px]' style={{color:'#DA1C5C'}} />
                        <div><span className='font-bold'>Voice Call Duration</span> : 100 minutes


                        </div>
                      </div>
                       
                      <div className="plan-feature-wrapper">
                      <BsArrowRightCircle className='text-[22px] sm:text-[25px] sm:mr-[15px] mr-[10px]' style={{color:'#DA1C5C'}} />
                        <div><span className='font-bold'>Free Chat Messages</span> : Unlimited messages


                        </div>
                      </div>
                      <span className='mt-[10px] package-subhead'>Please note that prior bookings are not available for trainers. All calls are subject to trainer availability at the time of your request.


                      </span>
                      
                    </div>
                  </animated.div>

                  <animated.div ref={section4Ref} style={section4Animation} className='mt-[25px]'>
                    <p className="paragraph plan-excerpt refund-policy sm:text-[24px] mb-[10px] font-extrabold text-black">4. Pay-Per-Minute Call Option


                    </p>
                    <div className="w-layout-grid plan-features-grid">
                      
                      <div className="plan-feature-wrapper mt-[25px]">
                      <BsArrowRightCircle className='text-[22px] sm:text-[25px] sm:mr-[15px] mr-[10px]' style={{color:'#DA1C5C'}} />
                        <div><span className='font-bold'> New Price</span> : 40 INR/min 

                        </div>
                      </div>
                      
                      <span className='mt-[10px] package-subhead'>Please note that prior bookings are not available for trainers. All calls are subject to trainer availability at the time of your request.



                      </span>
                      
                    </div>
                  </animated.div>

                  <animated.div ref={section5Ref} style={section5Animation} className='mt-[25px]'>
                    <p className="paragraph plan-excerpt refund-policy sm:text-[24px] mb-[10px] font-extrabold text-black">5. Chat-Only Option



                    </p>
                    <div className="w-layout-grid plan-features-grid">
                      
                      <div className="plan-feature-wrapper mt-[25px]">
                      <BsArrowRightCircle className='text-[22px] sm:text-[25px] sm:mr-[15px] mr-[10px]' style={{color:'#DA1C5C'}} />
                        <div><span className='font-bold'> New Price</span> : 7 INR/message


                        </div>
                      </div>
                      
                      <span className='mt-[10px] package-subhead'>Please note that prior bookings are not available for trainers. All calls are subject to trainer availability at the time of your request.



                      </span>
                      
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

export default CustomerPackeges