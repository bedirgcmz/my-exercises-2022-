import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutMe from "./AboutMe";
import Education from "./Education";
import { AnimatePresence } from "framer-motion";
import WorkExperiance from "./WorkExperiance";
import SkillsHobbies from "./SkillsHobbies";

const AnimationRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<AboutMe />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/work-experience" element={<WorkExperiance />} />
        <Route exact path="/skills-hobbies" element={<SkillsHobbies />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimationRoutes;
