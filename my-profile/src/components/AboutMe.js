import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
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
      // intial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0, transition: { duration: 1 } }}
      // // intial={{ width: 0 }}
      // // animate={{ width: "100%" }}
      // // exit={{ x: window.innerWidth, transition: { duration: 1.5 } }}
    >
      <h1>motion</h1>
      <p>jsnjkne akfnkjaf aknjkaf kajnkjnfjaenf jncj</p>
      <p>jsnjkne akfnkjaf aknjkaf kajnkjnfjaenf jncj</p>
      <p>jsnjkne akfnkjaf aknjkaf kajnkjnfjaenf jncj</p>
      <h1>motion</h1>
      <p>jsnjkne akfnkjaf aknjkaf kajnkjnfjaenf jncj</p>
      <p>jsnjkne akfnkjaf aknjkaf kajnkjnfjaenf jncj</p>
      <p>jsnjkne akfnkjaf aknjkaf kajnkjnfjaenf jncj</p>
      <p>jsnjkne akfnkjaf aknjkaf kajnkjnfjaenf jncj</p>
      <h1>motion</h1>
      <p>jsnjkne akfnkjaf aknjkaf kajnkjnfjaenf jncj</p>
      <p>jsnjkne akfnkjaf aknjkaf kajnkjnfjaenf jncj</p>
      <p>jsnjkne akfnkjaf aknjkaf kajnkjnfjaenf jncj</p>
      <p>jsnjkne akfnkjaf aknjkaf kajnkjnfjaenf jncj</p>
      <h1>motion</h1>
      <p>jsnjkne akfnkjaf aknjkaf kajnkjnfjaenf jncj</p>
      <p>jsnjkne akfnkjaf aknjkaf kajnkjnfjaenf jncj</p>
      <p>jsnjkne akfnkjaf aknjkaf kajnkjnfjaenf jncj</p>
      <p>jsnjkne akfnkjaf aknjkaf kajnkjnfjaenf jncj</p>
      <h1>motion</h1>
      <p>jsnjkne akfnkjaf aknjkaf kajnkjnfjaenf jncj</p>
      <p>jsnjkne akfnkjaf aknjkaf kajnkjnfjaenf jncj</p>
      <p>jsnjkne akfnkjaf aknjkaf kajnkjnfjaenf jncj</p>
      <p>jsnjkne akfnkjaf aknjkaf kajnkjnfjaenf jncj</p>
      <h1>motion</h1>
      <p>jsnjkne akfnkjaf aknjkaf kajnkjnfjaenf jncj</p>
      <p>jsnjkne akfnkjaf aknjkaf kajnkjnfjaenf jncj</p>
      <p>jsnjkne akfnkjaf aknjkaf kajnkjnfjaenf jncj</p>
      <p>jsnjkne akfnkjaf aknjkaf kajnkjnfjaenf jncj</p>
      <p>jsnjkne akfnkjaf aknjkaf kajnkjnfjaenf jncj</p>
    </motion.div>
  );
};

export default AboutMe;

/* 
intial={{ width: 0 }}
animate={{ width: "100%" }}
exit={{ x: window.innerWidth, transition: { duration: 1 } }}
*/
