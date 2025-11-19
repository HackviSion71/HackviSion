import React, { useEffect, useRef, useState } from "react";
import PopularCourses from "./populercourses";

function Home() {
  const [students, setStudents] = useState(0);
  const [courses, setCourses] = useState(0);
  const [experience, setExperience] = useState(0);

  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

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
          minHeight: "100vh",
          backgroundImage: `url("back_img.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.55)" }}
        ></div>

        {/* Text Content */}
        <div className="container position-relative z-1 px-3">
          <div className="row justify-content-center">
            <div className="col-md-10">

              {/* Responsive heading */}
              <h1 className="fw-bold mb-4 display-5 display-md-4">
                Welcome to{" "}
                <span style={{ color: "#0047AB" }}>HackviSion Academy</span>{" "}
                <br className="d-md-none" />
                Master CCNA, Linux & Cyber Security
              </h1>

              {/* Responsive paragraph */}
              <p className="lead fs-6 fs-md-5">
                Empowering the next generation of IT professionals through
                hands-on learning and real-world skills. <br />
                At HackviSion Academy, we help students and professionals gain
                in-demand skills in Networking (CCNA), Linux Administration, and
                Cyber Security through practical training and mentorship.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-5 bg-light text-center">
        <PopularCourses />
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-light text-center" ref={sectionRef}>
        <div className="container">
          <h2 className="fw-bold mb-4 text-dark">Why Choose HackviSion Academy?</h2>

          <div className="row">

            <div className="col-6 col-md-4 mb-4">
              <h3 className="text-primary fw-bold fs-2">{students}+</h3>
              <p className="text-muted fs-6">Students Trained</p>
            </div>

            <div className="col-6 col-md-4 mb-4">
              <h3 className="text-primary fw-bold fs-2">{courses}+</h3>
              <p className="text-muted fs-6">Industry-Level Courses</p>
            </div>

            <div className="col-6 col-md-4 mb-4 mx-auto">
              <h3 className="text-primary fw-bold fs-2">{experience}+</h3>
              <p className="text-muted fs-6">Years of Experience</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
