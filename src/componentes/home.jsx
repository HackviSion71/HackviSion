import React, { useEffect, useRef, useState } from "react";
import PopularCourses from "./populercourses";

function Home() {

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
      {/* Hero Section */}
      <section
        className="position-relative text-center text-light d-flex align-items-center justify-content-center"
        style={{
          height: "100vh",
          backgroundImage: `url("back_img.png")`,
          backgroundSize: "100% auto",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#000",
        }}
      >
        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></div>

        {/* Text Content */}
        <div className="container position-relative z-1">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <h1 className="display-4 fw-bold mb-4">
                Welcome to{" "}
                <span style={{ color: "#0047AB" }}>HackviSion Academy</span>{" "}
                Master CCNA, Linux & Cyber Security
              </h1>
              <p className="lead">
                Empowering the next generation of IT
                professionals through hands-on learning and real-world skills.
                <br />
                At HackviSion Academy, we help students and professionals gain
                in-demand skills in Networking (CCNA), Linux Administration,
                and Cyber Security through practical training and mentorship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-5 bg-light text-center">
        <PopularCourses/>
      </section>


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

export default Home;
