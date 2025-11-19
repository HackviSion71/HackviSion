import React from "react";
import { NavLink } from "react-router-dom";

function CourseCard({ image, title, description, features }) {
  return (
    <div
      className="card course-card shadow-sm border-0 h-100 d-flex flex-column"
      style={{ borderRadius: "12px", transition: "all 0.3s ease" }}
    >
      {/* Image */}
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{
          height: "200px",
          objectFit: "cover",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        }}
      />

      {/* Card Body */}
      <div
        className="card-body text-start d-flex flex-column"
        style={{ flexGrow: 1 }}
      >
        <h5 className="card-title fw-bold" style={{ color: "#001F3F" }}>
          {title}
        </h5>

        <p className="card-text text-secondary" style={{ fontSize: "0.95rem" }}>
          {description}
        </p>

        {features}

        {/* Push button to bottom */}
        <div className="mt-auto">
          <NavLink
            to="/HackviSion/enroll"
            className="btn fw-bold text-white mt-3 px-4 read-more-btn"
            style={{
              backgroundColor: "#3a4be9",
              borderRadius: "8px",
              textDecoration: "none",
              width: "100%",
            }}
          >
            Enroll
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
