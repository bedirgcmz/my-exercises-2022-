import React from "react";

const Footer = ({ bacgroundDark, color }) => {
  return (
    <div className={`footer p-3 ${bacgroundDark} text-white`}>
      <div className="social-media d-flex justify-content-around align-items-center mb-3">
        <div className="number-email text-start">
          <div className="my-number mb-3 d-flex align-items-center">
            <i className="fa-solid fa-mobile-screen-button me-2 fs-5"></i>{" "}
            <span>+46 76 963 73 90</span>
          </div>
          <div className="email d-flex align-items-center mb-3">
            <i className="fa-solid fa-envelope me-2 fs-5"></i>
            <span>bedir.gocmez@hicoders.ch</span>
          </div>
        </div>
        <div className="github-linkedin d-flex flex-column align-items-end">
          <div className="guthub d-flex align-items-center mb-3">
            <a className="text-white text-decoration-none" href="https://github.com/bedirgcmz">
              https://github.com/bedirgcmz
            </a>
            <i className="fa-brands fa-github ms-2 fs-5"></i>
          </div>
          <div className="linkedin d-flex align-items-center mb-3">
            <a
              className="text-white text-decoration-none "
              href="https://www.linkedin.com/in/bedir-gocmez-1a3388229/"
            >
              https://www.linkedin.com/in/bedir-gocmez-1a3388229/
            </a>
            <i className="fa-brands fa-linkedin ms-2 fs-5"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
