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
            <motion.img
              src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/6554f29340d8c7070133de9a_agency-logo-app-x-webflow-template.svg"
              alt="Appfly X - Agency Logo"
              className="image home-company-logo google"
              variants={variants}
            />
            <motion.img
              src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/6554f29360940145b2837a0d_application-logo-app-x-webflow-template.svg"
              alt="Appfly X - Application Logo"
              className="image home-company-logo"
              variants={variants}
            />
            <motion.img
              src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/6554f293def185924bbbdc50_business-logo-app-x-webflow-template.svg"
              alt="Appfly X - Business Logo"
              className="image home-company-logo youtube"
              variants={variants}
            />
            <motion.img
              src="https://cdn.prod.website-files.com/60b0fc1ddfea6980daf21a18/6554f29360d6bd89284d6e79_company-logo-app-x-webflow-template.svg"
              alt="Appfly X - Company Logo"
              className="image home-company-logo"
              variants={variants}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default FeaturedOn;
