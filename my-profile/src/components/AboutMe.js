import React from "react";
import { motion } from "framer-motion";

const AboutMe = ({ borderTop, borderBottom, borderLeft, borderRight, color }) => {
  const variants2 = {
    fadeIn: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    inactive: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    fadeOut: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="about-me w-75 mx-auto"
      variants={variants2}
      initial="fadeIn"
      animate="inactive"
      exit="fadeOut"
    >
      <h1 className={`${color}`}>About Me</h1>
      <div id="about-me-info-container">
        <div id="border-left" className={`${borderLeft} ${borderBottom}`}></div>
        <div id="border-right" className={`${borderRight} ${borderTop}`}></div>
        <img
          src="https://www.pngplay.com/wp-content/uploads/13/Programmer-PNG-Images-HD.png"
          alt=""
        />
        <p className={`${color} about-me-text`}>
          <b>I am an ambitious Developer with a passion for software and technology.</b> I have
          completed a 11-month <b>"Full Stack Web Development"</b> course. Through focused study I
          have reached the level of Junior Full Stack Web Programmer. A few months ago, I developed
          web-based applications using my newly acquired skills and I can develop in front-end and
          back-end disciplines. I am very keen to learn new technologies and especially artificial
          intelligence. <em>I count myself as very flexible and agile in teamwork.</em>
        </p>
      </div>
    </motion.div>
  );
};

export default AboutMe;

/* 
intial={{ width: 0 }}
animate={{ width: "100%" }}
exit={{ x: window.innerWidth, transition: { duration: 1 } }}
*/
