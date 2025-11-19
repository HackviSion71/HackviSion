import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/image.png";

function Navbar() {
  const closeNavbar = () => {
    const navbar = document.getElementById("navbarNav");
    if (navbar?.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark fw-bold sticky-top py-2 shadow-sm"
        style={{
          minHeight: "70px",
          backgroundColor: "#0A3D62",
        }}
      >
        <div className="container d-flex align-items-center">

          {/* LOGO + TITLE */}
          <div className="d-flex align-items-center navbar-brand m-0 p-0">

            {/* Logo */}
            <img
              src={logo}
              alt="HackVision Logo"
              className="rounded-3 img-fluid nav-logo"
              style={{
                width: "140px",
                height: "60px",
                objectFit: "cover",
                padding: "4px",
              }}
            />

            {/* Academy Name */}
            <span
              className="ms-2 fw-bold nav-title"
              style={{
                color: "#1B9CFC",
                letterSpacing: "0.5px",
                fontSize: "1.6rem",
              }}
            >
              HackviSion Academy
            </span>
          </div>

          {/* SMALL SCREEN RESPONSIVE CSS */}
          <style>
            {`
              /* Tablet Size */
              @media (max-width: 992px) {
                .nav-logo {
                  width: 120px !important;
                  height: 52px !important;
                }
                .nav-title {
                  font-size: 1.4rem !important;
                }
              }

              /* Mobile Size */
              @media (max-width: 576px) {
                .nav-logo {
                  width: 95px !important;
                  height: 42px !important;
                }
                .nav-title {
                  font-size: 1.15rem !important;
                }
              }

              /* Very Small Phones */
              @media (max-width: 400px) {
                .nav-logo {
                  width: 80px !important;
                  height: 35px !important;
                }
                .nav-title {
                  font-size: 1rem !important;
                }
              }
            `}
          </style>

          {/* Mobile Menu Toggle */}
          <button
            className="navbar-toggler border-0 ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav text-center">

              <li className="nav-item mx-2">
                <NavLink className="nav-link" to="/" onClick={closeNavbar}>
                  Home
                </NavLink>
              </li>

              <li className="nav-item mx-2">
                <NavLink className="nav-link" to="/viewcourses" onClick={closeNavbar}>
                  Courses
                </NavLink>
              </li>

              <li className="nav-item mx-2">
                <NavLink className="nav-link" to="/features" onClick={closeNavbar}>
                  Features
                </NavLink>
              </li>

              <li className="nav-item mx-2">
                <NavLink className="nav-link" to="/testimonials" onClick={closeNavbar}>
                  Testimonials
                </NavLink>
              </li>

              <li className="nav-item mx-2">
                <NavLink className="nav-link" to="/about" onClick={closeNavbar}>
                  About
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
