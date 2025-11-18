import React, { useEffect, useRef, useState } from "react";
import aboutImage from "../assets/CCNA.jpg"; // 👉 use any image you have

function About() {

  const [students, setStudents] = useState(0);
  const [courses, setCourses] = useState(0);
  const [experience, setExperience] = useState(0);

  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  // Count-up effect function
  const animateValue = (setter, end, duration = 2000) => {
    let start = 0;
    let increment = end / (duration / 60);

    const step = () => {
      start += increment;
      if (start < end) {
        setter(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setter(end);
      }
    };

    requestAnimationFrame(step);
  };

  // Trigger when section becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          animateValue(setStudents, 1000);
          animateValue(setCourses, 15);
          animateValue(setExperience, 10);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <>
      {/* ✅ Hero Section */}
      <section
        className="d-flex align-items-center justify-content-center text-center text-light"
        style={{
          height: "50vh",
          backgroundImage: `url(${aboutImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#000",
          position: "relative",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        ></div>
        <div className="position-relative">
          <h1 className="display-4 fw-bold">About HackviSion Academy</h1>
          <p className="lead">Empowering IT Professionals</p>
        </div>
      </section>

      {/* ✅ About Info Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src={aboutImage}
                alt="HackviSion Academy Training"
                className="img-fluid rounded shadow-sm"
              />
            </div>
            <div className="col-md-6 text-start">
              <h2 className="fw-bold text-primary mb-3">
                Who We Are
              </h2>
              <p className="text-muted">
                HackviSion Academy is a learning platform dedicated to bridging the gap
                between academic knowledge and industry demands. We specialize
                in professional courses such as <b>CCNA</b>, <b>Linux Administration</b>,
                and <b>Cyber Security</b>, focusing on hands-on, practical learning.
              </p>

              <p className="text-muted">
                Our goal is to create a new generation of IT professionals who are
                confident, skilled, and ready to take on real-world challenges in
                networking and security domains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Mission & Vision Section */}
      <section className="py-5 text-center bg-white">
        <div className="container">
          <h2 className="fw-bold text-dark mb-4">Our Mission & Vision</h2>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title text-primary fw-bold">Our Mission</h5>
                  <p className="card-text text-muted">
                    To empower learners with real-world technical skills and prepare
                    them for success in IT industries through innovative, hands-on
                    education.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title text-primary fw-bold">Our Vision</h5>
                  <p className="card-text text-muted">
                    To become a leading tech education platform that inspires learners
                    to innovate, secure, and transform the digital world responsibly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Optional: Stats or Team Section */}
      <section className="py-5 bg-light text-center" ref={sectionRef}>
        <div className="container">
          <h2 className="fw-bold mb-4 text-dark">Why Choose HackviSion Academy?</h2>

          <div className="row">
            <div className="col-md-4 mb-3">
              <h3 className="text-primary fw-bold">{students}+</h3>
              <p className="text-muted">Students Trained</p>
            </div>

            <div className="col-md-4 mb-3">
              <h3 className="text-primary fw-bold">{courses}+</h3>
              <p className="text-muted">Industry-Level Courses</p>
            </div>

            <div className="col-md-4 mb-3">
              <h3 className="text-primary fw-bold">{experience}+</h3>
              <p className="text-muted">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
