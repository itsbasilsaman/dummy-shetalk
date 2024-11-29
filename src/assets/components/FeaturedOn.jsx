import React from 'react';
import { motion } from 'framer-motion';

function FeaturedOn() {
  const variants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="section home-companies">
      <div className="container-default w-container">
        <motion.div
          className="home-companies-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="title h3-size home-companies"
            variants={variants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            As featured on
          </motion.h2>
          <motion.div
            className="home-companies-logos"
            variants={variants}
            transition={{ duration: 0.6, staggerChildren: 0.4 }}
          >
            <motion.p className='text-center'>
            Your voice is powerful, your story matters, and together we can create a world where women feel heard, supported, and empowered to thrive
            </motion.p>
              
            {/* <motion.p>
           story matters, and together we can 
            </motion.p>
               
            <motion.p>
            create a world where women feel heard,
            </motion.p>
               
            <motion.p>
            supported, and empowered to thrive
            </motion.p> */}
             
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default FeaturedOn;
