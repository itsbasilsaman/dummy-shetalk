import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AboutUsContentOne from "../New folder/7.png";

function AboutTwo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // Trigger animation when near viewport

  const contentVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  return (
    <div>
      <div className="section bg-neutral-200 adjust-size">
        <div className="container-default w-container">
          <div className="w-layout-grid about-story-grid" ref={ref}>
            <motion.div
              id="w-node-d517133c-8da3-fbdd-5aea-d763a923d38d-efcaa567"
              variants={contentVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"} // Animate on scroll
              className="about-story-content"
            >
              <h2 className="title about-story text-center">
                 Our Mission 
              </h2>
              <p className="paragraph about-story">
              She Talks is a groundbreaking platform dedicated to empowering women by fostering connection, support, and growth. Our mission is to create a safe and inspiring space where women can share experiences, access mental health resources, engage in meaningful discussions, and build a network that uplifts and celebrates their voices. Through this, She Talks aims to enhance mental well-being and personal development, creating a community that empowers women everywhere.
              </p>
            </motion.div>
            <motion.div
              id="w-node-_4d9f4c42-6b87-b84b-5784-2d5832e4502f-efcaa567"
              className="image-wrapper about-story-1"
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"} // Animate on scroll
            >
              <img
                className="image about-story-1"
                src={AboutUsContentOne}
                alt=" "
                sizes="(max-width: 479px) 93vw, (max-width: 991px) 94vw, 571px"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTwo;
