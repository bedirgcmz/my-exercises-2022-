import React from "react";
import { motion } from "framer-motion";
import "./progress.css";

const SkillsHobbies = ({ bacgroundOpc, color }) => {
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
      variants={variants2}
      initial="fadeIn"
      animate="inactive"
      exit="fadeOut"
      className="skills-hobbies-container w-75 m-auto mt-4"
    >
      <div className="skills-container">
        <h2 className={`${color} mb-4`}>
          SKILLS <i class="fa-solid fa-user-gear ms-3"></i>
        </h2>
        <div class="dashboard row">
          <div className="col-md-4 col-lg-2 col-sm-6 col-xs-12 d-flex justify-content-center mb-2">
            <div className="skill-and-name ">
              <span className={`${bacgroundOpc} skills-name html`}>Html</span>
              <svg>
                <circle class="bgr" cx="49" cy="42" r="30" />
                <circle class="meter-1" cx="48" cy="44" r="30" />
              </svg>
            </div>
          </div>
          <div className="col-md-4 col-lg-2 col-sm-6 col-xs-12 d-flex justify-content-center mb-2">
            <div className="skill-and-name ">
              <span className={`${bacgroundOpc} skills-name css`}>Css</span>
              <svg>
                <circle class="bgr" cx="49" cy="42" r="30" />
                <circle class="meter-2" cx="48" cy="44" r="30" />
              </svg>
            </div>
          </div>
          <div className="col-md-4 col-lg-2 col-sm-6 col-xs-12 d-flex justify-content-center mb-2">
            <div className="skill-and-name ">
              <span className={`${bacgroundOpc} skills-name bootstrap`}>Bootstrap</span>
              <svg>
                <circle class="bgr" cx="49" cy="42" r="30" />
                <circle class="meter-3" cx="48" cy="44" r="30" />
              </svg>
            </div>
          </div>
          <div className="col-md-4 col-lg-2 col-sm-6 col-xs-12 d-flex justify-content-center mb-2">
            <div className="skill-and-name ">
              <span className={`${bacgroundOpc} skills-name javascript`}>Javascript</span>
              <svg>
                <circle class="bgr" cx="49" cy="42" r="30" />
                <circle class="meter-4" cx="48" cy="44" r="30" />
              </svg>
            </div>
          </div>
          <div className="col-md-4 col-lg-2 col-sm-6 col-xs-12 d-flex justify-content-center mb-2">
            <div className="skill-and-name ">
              <span className={`${bacgroundOpc} skills-name react`}>React</span>
              <svg>
                <circle class="bgr" cx="49" cy="42" r="30" />
                <circle class="meter-5" cx="48" cy="44" r="30" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="hobbies-container">
        <h2 className={`${color} mb-4`}>
          HOBBIES <i class="fas fa-thumbs-up ms-3"></i>
        </h2>
        <div class="dashboard row">
          <div className="col-md-4 col-lg-2 col-sm-6 col-xs-12 d-flex justify-content-center mb-2">
            <div className="skill-and-name ">
              <span className={`${bacgroundOpc} skills-name movie`}>W.Movie</span>
              <svg>
                <circle class="bgr" cx="49" cy="42" r="30" />
                <circle class="meter-10" cx="48" cy="44" r="30" />
              </svg>
            </div>
          </div>
          <div className="col-md-4 col-lg-2 col-sm-6 col-xs-12 d-flex justify-content-center mb-2">
            <div className="skill-and-name ">
              <span className={`${bacgroundOpc} skills-name food`}>To C.Food</span>
              <svg>
                <circle class="bgr" cx="49" cy="42" r="30" />
                <circle class="meter-11" cx="48" cy="44" r="30" />
              </svg>
            </div>
          </div>
          <div className="col-md-4 col-lg-2 col-sm-6 col-xs-12 d-flex justify-content-center mb-2">
            <div className="skill-and-name ">
              <span className={`${bacgroundOpc} skills-name book`}>R.Book</span>
              <svg>
                <circle class="bgr" cx="49" cy="42" r="30" />
                <circle class="meter-12" cx="48" cy="44" r="30" />
              </svg>
            </div>
          </div>
          <div className="col-md-4 col-lg-2 col-sm-6 col-xs-12 d-flex justify-content-center mb-2">
            <div className="skill-and-name ">
              <span className={`${bacgroundOpc} skills-name travel`}>To Travel</span>
              <svg>
                <circle class="bgr" cx="49" cy="42" r="30" />
                <circle class="meter-13" cx="48" cy="44" r="30" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="skills-hobbies d-flex">
        <div class="skills w-50 d-flex flex-column progress-shadow">
          <h5 class="text-center fs-3">Skills</h5>
          <div class="name-line mx-auto w-50 d-flex justify-content-center align-items-center mb-4">
            <i class="fas fa-circle"></i>
            <div class="intermediate-line m-0"></div>
            <i class="fas fa-circle"></i>
          </div>
          <div class="skills-progress ">
            <div class="d-flex justify-content-around align-items-center">
              <p class="m-0 me-3 w-25 fs-4">React</p>
              <progress value="70" max="100">
                70 %
              </progress>
            </div>
            <div class="d-flex justify-content-around align-items-center">
              <p class="m-0 me-3 w-25 fs-4">Javascript</p>
              <progress value="70" max="100">
                70 %
              </progress>
            </div>
            <div class="d-flex justify-content-around align-items-center">
              <p class="m-0 me-3 w-25 fs-4">Bootstrap</p>
              <progress value="70" max="100">
                70 %
              </progress>
            </div>
            <div class="d-flex justify-content-around align-items-center">
              <p class="m-0 me-3 w-25 fs-4">Css</p>
              <progress value="70" max="100">
                70 %
              </progress>
            </div>
            <div class="d-flex justify-content-around align-items-center">
              <p class="m-0 me-3 w-25 fs-4">Html</p>
              <progress value="70" max="100">
                70 %
              </progress>
            </div>
          </div>
        </div>
         
        <div class="hobbies ps-2 w-50 ms-2 d-flex flex-column progress-shadow">
          <h5 class="text-center fs-3">Hobbies</h5>
          <div class="name-line mx-auto w-50 d-flex justify-content-center align-items-center mb-4">
            <i class="fas fa-circle"></i>
            <div class="intermediate-line m-0"></div>
            <i class="fas fa-circle"></i>
          </div>
          <div class="hobbies-progress">
            <div class="d-flex justify-content-around align-items-center py-1">
              <p class="m-0 me-3 w-50 fs-5">Watching Movie</p>
              <progress value="70" max="100">
                70 %
              </progress>
            </div>
            <div class="d-flex justify-content-around align-items-center py-1">
              <p class="m-0 me-3 w-50 fs-5">Reading Book</p>
              <progress value="70" max="100">
                70 %
              </progress>
            </div>
            <div class="d-flex justify-content-around align-items-center py-1">
              <p class="m-0 me-3 w-50 fs-5">To Travel</p>
              <progress value="80" max="100">
                80 %
              </progress>
            </div>
            <div class="d-flex justify-content-around align-items-center py-1">
              <p class="m-0 me-3 w-50 fs-5">To Cook Food</p>
              <progress value="70" max="100">
                70 %
              </progress>
            </div>
          </div>
        </div>
      </div> */}
    </motion.div>
  );
};

export default SkillsHobbies;
