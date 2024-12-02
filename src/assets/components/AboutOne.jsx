import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AboutUsContentTwo from "../New folder/86.png";

function AboutOne() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, staggerChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };


  const gridRef = useRef(null);

  // Trigger animation when 0.1% of the grid box is visible
  const isGridInView = useInView(gridRef, { threshold: 0.001 });

 

 


  return (
    <>
      <div ref={sectionRef} className="section about-hero">
        <div className="container-medium-680px about-hero">
          <motion.h1
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="title about-hero sm:mb-[10px]"
          >
            About our company
          </motion.h1>
          <motion.p
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="paragraph about-hero sm:mb-[15px]"
          >
            Welcome to She Talks, a platform empowering women through connection, growth, and shared experiences.
          </motion.p>
        </div>
        <div className="container-large-1073px">
          <motion.div
            className="image-wrapper about-hero"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1, transition: { duration: 1.7 } } : {}}
          >
            <img
              className="image about-hero"
              src={AboutUsContentTwo}
              alt="About Us - App X Webflow Template"
              sizes="(max-width: 479px) 93vw, (max-width: 991px) 94vw, (max-width: 1919px) 95vw, 1025px"
            />
          </motion.div>
          <motion.div
      ref={gridRef}
      className="w-layout-grid about-hero-achievements-grid"
      variants={containerVariants}
      initial="hidden"
      animate={isGridInView ? "visible" : "hidden"}
    >
      {[1, 2, 3].map((item, index) => (
        <motion.div
          key={index}
          className="card about-hero-achievement"
          variants={itemVariants}
        >
          <div className="card-about-hero-achievement-number">
            {item === 1 && (
              <>
                100<span className="accent-text-secondary-1">M</span>
              </>
            )}
            {item === 2 && (
              <>
                20<span className="accent-text-secondary-3">M</span>
              </>
            )}
            {item === 3 && (
              <>
                35<span className="accent-text-secondary-5">+</span>
              </>
            )}
          </div>
          <div className="card-about-hero-achievement-content">
            <h2 className="title h5-size card-about-hero-achievement">
              {item === 1 && "App downloads"}
              {item === 2 && "Active users"}
              {item === 3 && "Team members"}
            </h2>
            <p className="paragraph card-about-hero-achievement">
              Lorem ipsum dolor sit amet consectetur adipiscing
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
        </div>
      </div>
    </>
  );
}

export default AboutOne;
