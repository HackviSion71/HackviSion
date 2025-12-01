import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer
        className="text-white text-center text-lg-start mt-5"
        style={{ backgroundColor: "#0A3D62" }}
      >
        <div className="container p-4">
          <div className="row justify-content-center align-items-start">
            {/* About Us */}
            <div className="col-lg-5 col-md-6 mb-5 mb-lg-0">
              <h5 className="fw-bold" style={{ color: "#1B9CFC" }}>
                About Us
              </h5>
              <p style={{ color: "#ECF0F1" }}>
                HackviSion Academy is a learning platform focused on practical training
                in CCNA, Linux, and Cyber Security. We aim to empower learners
                with real-world IT knowledge and hands-on experience.
              </p>
            </div>

            {/* Add spacing between sections */}
            <div className="col-lg-1 d-none d-lg-block"></div>

            {/* Contact & Social Media */}
            <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
              <h5 className="fw-bold" style={{ color: "#1B9CFC" }}>
                Contact
              </h5>
              <p style={{ color: "#ECF0F1" }}>
                Email: info@hackvison.com
                <br />
                Phone: +91 9422763576
              </p>

              <div className="d-flex justify-content-center justify-content-lg-start mt-3">
                <a
                  href="https://www.instagram.com/hackv_ision71/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-3 text-white fs-4"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/hackvision.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-3 text-white fs-4"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                
                <a
                  href="https://www.facebook.com/hackvision.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-3 text-white fs-4"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCCiIlyODSE78i116qfvvI7A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white fs-4"
                >
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="text-center p-3"
          style={{
            backgroundColor: "#052D4A",
            color: "#ECF0F1",
          }}
        >
          © HackviSion Academy 2025. All rights reserved. • Built for learners — CCNA,
          Linux & Cyber Security
        </div>
      </footer>
    </>
  );
}

export default Footer;
