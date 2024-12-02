import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function AboutThree() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contentVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <div
        className="w-full sm:px-[80px] sm:h-screen sm:py-[50px] flex items-center flex-col py-[12px] px-[14px]"
        ref={ref}
      >
        <motion.h2
          className="text-center my-[21px] sm:pb-[12px] "
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          The story and mission behind our company
        </motion.h2>
        <motion.p
 
          className="    text-justify sm:text-center   px-[18px] sm:mx-[45px]"
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }} // Add slight delay for staggered effect
        >
        Welcome to She Talks, a groundbreaking platform created exclusively for women, where empowerment, connection, and personal growth are at the heart of everything we do. Our mission is to build a powerful, inclusive community that fosters a sense of belonging and support, where women can connect, share experiences, and uplift one another. In a world that often feels overwhelming, She Talks is a safe and nurturing space dedicated to enhancing mental well-being, self-discovery, and personal growth. <br />

<div className="sm:block hidden">
  At She Talks, we offer a variety of resources designed to help women thrive. Whether you’re seeking one-on-one coaching, participating in mindfulness sessions, or exploring our extensive library of wellness resources, every aspect of our platform is crafted to support you on your journey. Our community forums, peer support circles, and private journaling features create opportunities for deep connections, reflection, and mutual encouragement. <br />
  
  We understand that mental well-being is a journey, not a destination. That’s why She Talks provides personalized tools, such as goal setting, progress tracking, and self-assessments, to help you stay motivated, build resilience, and navigate life’s challenges. We also host workshops and webinars with mental health professionals, covering topics like self-esteem, stress management, and emotional wellness, so you can learn and grow at your own pace. <br />
  
  Above all, She Talks is a space where every woman’s voice is valued and celebrated. We are committed to fostering a community that inspires, empowers, and strengthens the voices of women everywhere. Together, we rise—through shared experiences, support, and the collective power of our voices. Join us on this journey of transformation, connection, and growth.
</div>
        </motion.p>
      </div>
    </>
  );
}

export default AboutThree;
