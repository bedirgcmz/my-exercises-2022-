import React from "react";
import { motion } from "framer-motion";

const Education = () => {
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
      className="education"
      variants={variants2}
      initial="fadeIn"
      animate="inactive"
      exit="fadeOut"
      // // initial={{ x: 300, opacity: 0 }}
      // // animate={{ x: 0, opacity: 1 }}
      // // exit={{ x: -300, opacity: 0 }}
      // intial={{ width: 0 }}
      // animate={{ width: "100%" }}
      // exit={{ y: window.innerWidth, transition: { duration: 1.5 } }}
    >
      <p>x: window.innerWidth, transition: </p>
      <p>x: window.innerWidth, transition: </p>
      <p>x: window.innerWidth, transition: </p>
      <p>x: window.innerWidth, transition: </p>
      <p>x: window.innerWidth, transition: </p>
      <p>x: window.innerWidth, transition: </p>
    </motion.div>
  );
};

export default Education;
