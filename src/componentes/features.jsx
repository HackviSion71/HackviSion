import React from "react";

function Features() {
  const features = [
    {
      id: 1,
      icon: "bi bi-laptop",
      title: "Practical Learning",
      description:
        "Hands-on training with real-world projects to help students master CCNA, Linux, and Cyber Security concepts effectively.",
    },
    {
      id: 2,
      icon: "bi bi-person-check",
      title: "Expert Instructors",
      description:
        "Learn directly from certified industry professionals with years of experience in IT networking and security.",
    },
    {
      id: 3,
      icon: "bi bi-globe",
      title: "Global Certifications Assistant",
      description:
        "Get prepared for internationally recognized certifications like CCNA, RHCE, and CEH with confidence.",
    },
    {
      id: 4,
      icon: "bi bi-shield-lock",
      title: "Secure Learning Environment",
      description:
        "Our labs are built with real tools and sandboxed environments to practice penetration testing safely.",
    },
    {
      id: 5,
      icon: "bi bi-people",
      title: "Community Support",
      description:
        "Join our active learning community to share knowledge, solve problems, and grow together.",
    },
    {
      id: 6,
      icon: "bi bi-trophy",
      title: "Career Growth",
      description:
        "We provide resume building, interview preparation, and placement guidance to launch your IT career.",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4" style={{ color: "#0A3D62" }}>
        Our Key Features
      </h2>
      <p className="text-center text-secondary mb-5">
        Explore the benefits that make HackviSion Academy the most trusted platform for
        IT learners.
      </p>

      <div className="row g-4">
        {features.map((feature) => (
          <div key={feature.id} className="col-lg-4 col-md-6">
            <div className="card feature-card text-center h-100 border-0 shadow-sm p-4">
              <div className="feature-icon mb-3">
                <i className={`${feature.icon} fs-1 text-primary`}></i>
              </div>
              <h5 className="fw-bold" style={{ color: "#001F3F" }}>
                {feature.title}
              </h5>
              <p className="text-secondary" style={{ fontSize: "0.95rem" }}>
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
