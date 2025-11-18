import React from "react";
import { NavLink } from "react-router-dom";
// import logo from "../assets/logo.jpg";
import logo from "../assets/image.png";

function Navbar() {
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
          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={logo}
              alt="HackVision Logo"
              width="140"
              height="60"
              className="d-inline-block align-text-top me-2 rounded-3"
              style={{
                objectFit: "cover",
                // backgroundColor: "#fff",
                padding: "4px",
                borderRadius: "8px",
              }}
            />
            <span
              className="fs-4 ms-2"
              style={{
                color: "#1B9CFC", 
                fontWeight: "700",
                letterSpacing: "0.5px",
              }}
            >
              HackviSion Academy
            </span>
          </NavLink>

          {/* Mobile Menu Toggle */}
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
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav text-center">
              <li className="nav-item mx-2">
                <NavLink
                  className="nav-link"
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "#FFC312" : "#ECF0F1", 
                    transition: "0.3s",
                  })}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  className="nav-link"
                  to="/viewcourses"
                  style={({ isActive }) => ({
                    color: isActive ? "#FFC312" : "#ECF0F1",
                    transition: "0.3s",
                  })}
                >
                  Courses
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  className="nav-link"
                  to="/features"
                  style={({ isActive }) => ({
                    color: isActive ? "#FFC312" : "#ECF0F1",
                    transition: "0.3s",
                  })}
                >
                  Features
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  className="nav-link"
                  to="/testimonials"
                  style={({ isActive }) => ({
                    color: isActive ? "#FFC312" : "#ECF0F1",
                    transition: "0.3s",
                  })}
                >
                  Testimonials
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  className="nav-link"
                  to="/about"
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
