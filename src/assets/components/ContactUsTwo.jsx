import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactUsTwo() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out', once: true });
  }, []);

  return (
    <>
      <div className="section bg-neutral-200 faqs">
        <div className="container-default w-container pb-[40px] sm:pb-[0px]">
          <h2 
            data-aos="fade-up" 
            className="title faqs"
          >
            Frequently asked questions
          </h2>
          <div 
            data-aos="fade-up" 
            className="faqs-wrapper"
          >
            <div className="split-content faqs-left">
              <div className="card faq" data-aos="fade-right">
                <div className="card-faq-top">
                  <h3 className="title h4-size card-faq">
                    What is She Talks and who is it for?
                  </h3>
                  <div className="card-faq-icon-wrapper">
                    <div className="card-faq-icon-line-1" />
                    <div className="card-faq-icon-line-2" />
                  </div>
                </div>
                <div className="card-faq-bottom">
                  <p className="paragraph card-faq">
                    She Talks is a platform for women focused on mental well-being and personal growth, offering a supportive community to connect, share, and uplift each other.
                  </p>
                </div>
              </div>

              <div className="card faq" data-aos="fade-right">
                <div className="card-faq-top">
                  <h3 className="title h4-size card-faq">
                    How can I access live coaching and mentoring sessions?
                  </h3>
                  <div className="card-faq-icon-wrapper">
                    <div className="card-faq-icon-line-1" />
                    <div className="card-faq-icon-line-2" />
                  </div>
                </div>
                <div className="card-faq-bottom">
                  <p className="paragraph card-faq">
                    You can book personalized one-on-one coaching and mentoring sessions with experienced professionals to guide your mental health and growth.
                  </p>
                </div>
              </div>

              <div className="card faq" data-aos="fade-right">
                <div className="card-faq-top">
                  <h3 className="title h4-size card-faq">
                    What are peer support circles, and how can I join one?
                  </h3>
                  <div className="card-faq-icon-wrapper">
                    <div className="card-faq-icon-line-1" />
                    <div className="card-faq-icon-line-2" />
                  </div>
                </div>
                <div className="card-faq-bottom">
                  <p className="paragraph card-faq">
                    Peer support circles are small, moderated groups where women can share experiences and support each other in a safe space.
                  </p>
                </div>
              </div>
            </div>

            <div className="split-content faqs-right">
              <div className="card faq" data-aos="fade-left">
                <div className="card-faq-top">
                  <h3 className="title h4-size card-faq">
                    What are the benefits of joining She Talks?
                  </h3>
                  <div className="card-faq-icon-wrapper">
                    <div className="card-faq-icon-line-1" />
                    <div className="card-faq-icon-line-2" />
                  </div>
                </div>
                <div className="card-faq-bottom">
                  <p className="paragraph card-faq">
                    Access a supportive community, personalized coaching, mental health resources, and tools for personal growth.
                  </p>
                </div>
              </div>

              <div className="card faq" data-aos="fade-left">
                <div className="card-faq-top">
                  <h3 className="title h4-size card-faq">
                    What makes She Talks different from other wellness platforms?
                  </h3>
                  <div className="card-faq-icon-wrapper">
                    <div className="card-faq-icon-line-1" />
                    <div className="card-faq-icon-line-2" />
                  </div>
                </div>
                <div className="card-faq-bottom">
                  <p className="paragraph card-faq">
                    She Talks is specifically designed for women, offering tailored mental health support and personal growth tools in a safe environment.
                  </p>
                </div>
              </div>

              <div className="card faq" data-aos="fade-left">
                <div className="card-faq-top">
                  <h3 className="title h4-size card-faq">
                    How can I join a peer support circle and engage with other members on She Talks?
                  </h3>
                  <div className="card-faq-icon-wrapper">
                    <div className="card-faq-icon-line-1" />
                    <div className="card-faq-icon-line-2" />
                  </div>
                </div>
                <div className="card-faq-bottom">
                  <p className="paragraph card-faq">
                    Browse available groups in the app, select one that suits you, engage, share, and participate in meaningful discussions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsTwo;
