import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/image.png";

function Navbar() {
  // Function to close mobile menu
  const closeNavbar = () => {
    const navbar = document.getElementById("navbarNav");
    if (navbar && navbar.classList.contains("show")) {
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
        <div className="container">

          {/* Brand Logo */}
          
            <img
              src={logo}
              alt="HackVision Logo"
              className="d-inline-block align-text-top me-2 rounded-3 img-fluid"
              style={{
                width: "140px",
                height: "60px",
                objectFit: "cover",
                padding: "4px",
                borderRadius: "8px",
                maxWidth: "100%",
              }}
            />

            <style>
              {`
                @media (max-width: 576px) {
                  .navbar-brand img {
                    width: 110px !important;
                    height: 48px !important;
                  }
                }
                @media (max-width: 400px) {
                  .navbar-brand img {
                    width: 95px !important;
                    height: 40px !important;
                  }
                }
              `}
            </style>

            <span
              className="ms-2 fw-bold fs-4 fs-md-4 fs-sm-5 fs-6"
              style={{
                color: "#1B9CFC",
                letterSpacing: "0.5px",
              }}
            >
              HackviSion Academy
            </span>
          

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav text-center">

              <li className="nav-item mx-2">
                <NavLink className="nav-link" to="/HackviSion/" onClick={closeNavbar}
                  style={({ isActive }) => ({
                    color: isActive ? "#FFC312" : "#ECF0F1",
                    transition: "0.3s",
                  })}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item mx-2">
                <NavLink className="nav-link" to="/HackviSion/viewcourses" onClick={closeNavbar}
                  style={({ isActive }) => ({
                    color: isActive ? "#FFC312" : "#ECF0F1",
                    transition: "0.3s",
                  })}
                >
                  Courses
                </NavLink>
              </li>

              <li className="nav-item mx-2">
                <NavLink className="nav-link" to="/HackviSion/features" onClick={closeNavbar}
                  style={({ isActive }) => ({
                    color: isActive ? "#FFC312" : "#ECF0F1",
                    transition: "0.3s",
                  })}
                >
                  Features
                </NavLink>
              </li>

              <li className="nav-item mx-2">
                <NavLink className="nav-link" to="/HackviSion/testimonials" onClick={closeNavbar}
                  style={({ isActive }) => ({
                    color: isActive ? "#FFC312" : "#ECF0F1",
                    transition: "0.3s",
                  })}
                >
                  Testimonials
                </NavLink>
              </li>

              <li className="nav-item mx-2">
                <NavLink className="nav-link" to="/HackviSion/about" onClick={closeNavbar}
                  style={({ isActive }) => ({
                    color: isActive ? "#FFC312" : "#ECF0F1",
                    transition: "0.3s",
                  })}
                >
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
