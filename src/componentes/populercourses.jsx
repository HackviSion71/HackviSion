import React from "react";
import { useNavigate } from "react-router-dom";
import CourseCard from "./coursecard";
import erpImage from "../assets/CCNA.jpg";
import linuxImage from "../assets/Linux.jpg";
import cyberImage from "../assets/cyber_security.jpg";

function PopularCourses() {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate("/viewcourses");
  };

  const courses = [
      {
        image: erpImage,
        title: "CCNA (Cisco Certified Network Associate)",
        description:
          "Routing & switching, network fundamentals, VLANs, inter-VLAN routing, and real lab scenarios to clear CCNA.",
        features:<>
            <ul className="list-unstyled mb-0">
              <li>✔ Packet Tracer & real device labs</li>
              <li>✔ Certification-focused syllabus</li>
              <li>✔ Resume & interview prep</li>
            </ul>
        </>
      },
      {
        image: linuxImage,
        title: "Linux Administration",
        description:
          "Master shell, users & permissions, services, systemd, networking, storage, and server administration for production systems.",
        features:<>
          <ul className="list-unstyled mb-0">
              <li>✔ Hands-on CLI practice</li>
              <li>✔ Bash scripting & automation</li>
              <li>✔ Server hardening basics</li>
            </ul>
        </>
      },
      {
        image: cyberImage,
        title: "Cyber Security Fundamentals",
        description:
          "Security fundamentals, threat modeling, network defense, basic ethical hacking, and incident response labs.",
        features:<>
          <ul className="list-unstyled mb-0">
              <li>✔ Vulnerability assessment labs</li>
              <li>✔ Defensive techniques & best practices</li>
              <li>✔ Practical CTF-style exercises</li>
            </ul>
        </>
      },
    ];

  return (
    <section className="py-5 bg-light text-center">
      <div className="container">
        <h2 className="fw-bold mb-4 text-dark">Popular Courses</h2>

        <div className="row justify-content-center">
          {courses.map((course, index) => (
            <div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <CourseCard
                image={course.image}
                title={course.title}
                description={course.description}
                features={course.features}
              />
            </div>
          ))}
        </div>

        <button
          className="btn btn-primary btn-lg mt-3 px-4 py-2"
          onClick={handleViewMore}
        >
          View More Courses
        </button>
      </div>
    </section>
  );
}

export default PopularCourses;
