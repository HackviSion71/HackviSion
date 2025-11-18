import React from "react";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Karan Ajabe",
      course: "CCNA Networking",
      feedback:
        "HackviSion Academy's CCNA course helped me build strong networking fundamentals. The instructor explained every concept clearly and practically.",
      image:
        "karan_img.jpeg",
    },
    {
      id: 2,
      name: "Gandal Mahesh",
      course: "Linux Administration",
      feedback:
        "The Linux course was very practical and hands-on. I gained real system admin experience and confidence to manage Linux servers.",
      image:
        "mahesh_img.jpeg",
    },
    {
      id: 3,
      name: "Rohit Ghodke",
      course: "Cyber Security",
      feedback:
        "Excellent course with real-world examples and labs. I learned about ethical hacking, firewalls, and security tools in depth.",
      image:
        "rohit_img.jpeg",
    },
  ];

  return (
    <div className="container my-5">
      <h2
        className="text-center fw-bold mb-4"
        style={{ color: "#0A3D62" }}
      >
        Student Testimonials
      </h2>
      <p className="text-center text-secondary mb-5">
        Hear what our students say about their learning experience at HackviSion Academy.
      </p>

      <div className="row g-4">
        {testimonials.map((t) => (
          <div key={t.id} className="col-lg-4 col-md-6">
            <div className="card testimonial-card text-center h-100 border-0 shadow-sm p-3">
              <img
                src={t.image}
                alt={t.name}
                className="rounded-circle mx-auto mt-3"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                }}
              />
              <div className="card-body">
                <h5 className="fw-bold mt-3" style={{ color: "#001F3F" }}>
                  {t.name}
                </h5>
                <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                  {t.course}
                </p>
                <p
                  className="text-secondary fst-italic"
                  style={{ fontSize: "0.95rem" }}
                >
                  “{t.feedback}”
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
